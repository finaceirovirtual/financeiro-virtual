// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD_K7ESDO4c9ja_mFNF2RGjx7KOxWPzuXo",
    authDomain: "financas-8cf44.firebaseapp.com",
    projectId: "financas-8cf44",
    storageBucket: "financas-8cf44.appspot.com",
    messagingSenderId: "637122171830",
    appId: "1:637122171830:web:8c42d2169f6176cb0d6717",
    measurementId: "G-GZJSG5TMLS"
};

// Inicializa o Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Acessa o Firestore e o Auth
const db = firebase.firestore();
const auth = firebase.auth();

// Verifica se o usuário está logado
auth.onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'login.html';
    } else {
        document.querySelector('h2').textContent = `Bem-vindo, ${user.displayName || 'Usuário'}!`;
        carregarDadosFinanceiros(user.uid);
    }
});

// Função para carregar dados financeiros
async function carregarDadosFinanceiros(uid) {
    try {
        const ganhos = await recuperarDados(uid, "ganhos");
        const despesas = await recuperarDados(uid, "despesas");
        const investimentos = await recuperarDados(uid, "investimentos");

        const totalGanhos = ganhos.reduce((total, ganho) => total + ganho.valor, 0);
        const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);

        // Atualiza os preços dos investimentos
        const totalInvestimentos = await atualizarPrecosInvestimentos(investimentos);

        const saldoAtual = totalGanhos - totalDespesas - totalInvestimentos;

        document.getElementById('saldo-atual').textContent = `R$ ${saldoAtual.toFixed(2)}`;
        document.getElementById('despesas-mes').textContent = `R$ ${totalDespesas.toFixed(2)}`;
        document.getElementById('investimentos').textContent = `R$ ${totalInvestimentos.toFixed(2)}`;

        criarGraficoDespesas(ganhos, despesas, investimentos);
        criarGraficoInvestimentos(investimentos);
    } catch (error) {
        console.error("Erro ao carregar dados financeiros:", error);
    }
}

// Função para recuperar dados do Firestore
async function recuperarDados(uid, colecao) {
    try {
        const querySnapshot = await db.collection("usuarios").doc(uid).collection(colecao).get();
        const dados = [];
        querySnapshot.forEach((doc) => {
            dados.push({ id: doc.id, ...doc.data() });
        });
        return dados;
    } catch (error) {
        console.error(`Erro ao recuperar ${colecao}:`, error);
        return [];
    }
}

// Função para buscar preços atuais dos investimentos
async function atualizarPrecosInvestimentos(investimentos) {
    const apiKeyAlphaVantage = 'YII36O0SMZRKNRV0'; // Sua chave da Alpha Vantage
    let totalInvestimentos = 0;

    for (const investimento of investimentos) {
        let precoAtual = 0;

        if (investimento.tipo === 'acoes') {
            // Busca o preço da ação usando Alpha Vantage
            const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${investimento.ticker}&apikey=${apiKeyAlphaVantage}`);
            const data = await response.json();
            precoAtual = parseFloat(data['Global Quote']['05. price']);
        } else if (investimento.tipo === 'criptomoedas') {
            // Busca o preço da criptomoeda usando CoinGecko
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${investimento.ticker}&vs_currencies=usd`);
            const data = await response.json();
            precoAtual = parseFloat(data[investimento.ticker].usd);
        }

        // Atualiza o valor total do investimento
        totalInvestimentos += precoAtual * investimento.quantidade;
    }

    return totalInvestimentos;
}

// Função para criar o gráfico de despesas
function criarGraficoDespesas(ganhos, despesas, investimentos) {
    const ctx = document.getElementById('grafico-despesas');
    if (!ctx) return;

    const meses = {};
    const mesesUnicos = new Set();

    ganhos.forEach(ganho => {
        const data = new Date(ganho.data);
        const mesAno = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
        mesesUnicos.add(mesAno);

        if (!meses[mesAno]) {
            meses[mesAno] = { ganhos: 0, despesas: 0, investimentos: 0 };
        }
        meses[mesAno].ganhos += ganho.valor;
    });

    despesas.forEach(despesa => {
        const data = new Date(despesa.data);
        const mesAno = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
        mesesUnicos.add(mesAno);

        if (!meses[mesAno]) {
            meses[mesAno] = { ganhos: 0, despesas: 0, investimentos: 0 };
        }
        meses[mesAno].despesas += despesa.valor;
    });

    investimentos.forEach(investimento => {
        const data = new Date(investimento.data);
        const mesAno = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
        mesesUnicos.add(mesAno);

        if (!meses[mesAno]) {
            meses[mesAno] = { ganhos: 0, despesas: 0, investimentos: 0 };
        }
        meses[mesAno].investimentos += investimento.valor;
    });

    const mesesOrdenados = Array.from(mesesUnicos).sort();
    const labels = mesesOrdenados;
    const dadosGastos = mesesOrdenados.map(mes => meses[mes].despesas);
    const dadosSaldo = mesesOrdenados.map(mes => meses[mes].ganhos - meses[mes].despesas - meses[mes].investimentos);
    const dadosInvestimentos = mesesOrdenados.map(mes => meses[mes].investimentos);

    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Gastos',
                    data: dadosGastos,
                    backgroundColor: '#FF5722',
                },
                {
                    label: 'Saldo Final',
                    data: dadosSaldo,
                    backgroundColor: '#4CAF50',
                },
                {
                    label: 'Investimentos',
                    data: dadosInvestimentos,
                    backgroundColor: '#FFD700',
                }
            ]
        },
        options: {
            responsive: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                x: {
                    stacked: false,
                },
                y: {
                    stacked: false,
                    beginAtZero: true,
                }
            }
        },
    });
}

// Função para criar o gráfico de investimentos
function criarGraficoInvestimentos(investimentos) {
    const ctx = document.getElementById('grafico-investimentos');
    if (!ctx) return;

    const meses = {};
    const mesesUnicos = new Set();

    investimentos.forEach(investimento => {
        const data = new Date(investimento.data);
        const mesAno = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
        mesesUnicos.add(mesAno);

        if (!meses[mesAno]) {
            meses[mesAno] = { investimentos: 0 };
        }
        meses[mesAno].investimentos += investimento.valor;
    });

    const mesesOrdenados = Array.from(mesesUnicos).sort();
    const labels = mesesOrdenados;
    const dadosInvestimentos = mesesOrdenados.map(mes => meses[mes].investimentos);

    new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Investimentos',
                    data: dadosInvestimentos,
                    borderColor: '#FFD700',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                x: {
                    type: 'category',
                },
                y: {
                    beginAtZero: true,
                }
            }
        },
    });
}

// Botão de sair
document.getElementById('btn-sair').addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Erro ao sair:', error);
    });
});