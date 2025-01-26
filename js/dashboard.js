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
        // Recupera o saldo atual
        const saldoAtualRef = db.collection("usuarios").doc(uid).collection("saldo").doc("atual");
        const saldoAtualDoc = await saldoAtualRef.get();
        const saldoAtual = saldoAtualDoc.exists ? saldoAtualDoc.data().valor : 0;

        // Exibe o saldo atual
        document.getElementById('saldo-atual').textContent = `R$ ${saldoAtual.toFixed(2)}`;

        // Recupera e exibe despesas e investimentos (sem recalcular o saldo)
        const despesas = await recuperarDados(uid, "despesas");
        const investimentos = await recuperarDados(uid, "investimentos");

        const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
        const totalInvestimentos = await atualizarPrecosInvestimentos(investimentos);

        document.getElementById('despesas-mes').textContent = `R$ ${totalDespesas.toFixed(2)}`;
        document.getElementById('investimentos').textContent = `R$ ${totalInvestimentos.toFixed(2)}`;

        // Cria os gráficos
        criarGraficoDespesas(despesas);
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

// Função para buscar preços atuais dos investimentos e exibir a quantidade
async function atualizarPrecosInvestimentos(investimentos) {
    const apiKeyAlphaVantage = 'YII36O0SMZRKNRV0'; // Sua chave da Alpha Vantage
    let totalInvestimentos = 0;

    // Limpa a lista de investimentos antes de exibir os novos
    const listaInvestimentos = document.getElementById('lista-investimentos');
    listaInvestimentos.innerHTML = "";

    for (const investimento of investimentos) {
        let precoAtual = 0;

        if (investimento.tipo === 'acoes') {
            // Busca o preço da ação usando Alpha Vantage
            precoAtual = await buscarPrecoAcao(investimento.ticker, apiKeyAlphaVantage);
        } else if (investimento.tipo === 'criptomoedas') {
            // Busca o preço da criptomoeda usando CoinGecko com AllOrigins
            precoAtual = await buscarPrecoCripto(investimento.ticker);
        } else {
            // Para outros tipos de investimento, o preço é 1 (não aplicável)
            precoAtual = 1;
        }

        // Calcula o valor atual do investimento
        const valorAtual = precoAtual * investimento.quantidade;
        totalInvestimentos += valorAtual;

        // Exibe o investimento na lista
        const itemInvestimento = document.createElement('div');
        itemInvestimento.className = 'item-investimento';
        itemInvestimento.innerHTML = `
            <div class="investimento-header">
                <strong>${investimento.descricao}</strong>
                <span class="valor-atual">R$ ${valorAtual.toFixed(2)}</span>
            </div>
            <div class="investimento-detalhes">
                <span>Valor Investido: R$ ${investimento.valor.toFixed(2)}</span>
                <span>Quantidade: ${investimento.quantidade.toFixed(8)} ${investimento.ticker.toUpperCase()}</span>
            </div>
        `;
        listaInvestimentos.appendChild(itemInvestimento);
    }

    return totalInvestimentos;
}

// Função para buscar o preço de uma ação usando Alpha Vantage
async function buscarPrecoAcao(ticker, apiKey) {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`);
    const data = await response.json();

    if (data["Global Quote"] && data["Global Quote"]["05. price"]) {
        return parseFloat(data["Global Quote"]["05. price"]);
    } else {
        throw new Error("Não foi possível obter o preço da ação.");
    }
}

// Função para buscar o preço de uma criptomoeda usando CoinGecko com AllOrigins
async function buscarPrecoCripto(ticker) {
    const cacheKey = `preco-${ticker}`;
    const cacheExpiry = 5 * 60 * 1000; // 5 minutos

    // Verifica se há um cache válido
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const { timestamp, price } = JSON.parse(cachedData);
        if (Date.now() - timestamp < cacheExpiry) {
            return price; // Retorna o preço do cache
        }
    }

    // Faz a requisição à API usando AllOrigins
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = encodeURIComponent(`https://api.coingecko.com/api/v3/simple/price?ids=${ticker}&vs_currencies=usd`);
    
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        const parsedData = JSON.parse(data.contents); // AllOrigins retorna os dados em data.contents

        if (parsedData[ticker] && parsedData[ticker].usd) {
            const price = parseFloat(parsedData[ticker].usd);
            // Armazena no cache
            localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), price }));
            return price;
        } else {
            throw new Error("Não foi possível obter o preço da criptomoeda.");
        }
    } catch (error) {
        console.error("Erro ao buscar preço da criptomoeda:", error);
        throw error;
    }
}

// Função para criar o gráfico de despesas
function criarGraficoDespesas(despesas) {
    const ctx = document.getElementById('grafico-despesas');
    if (!ctx) return;

    const meses = {};
    const mesesUnicos = new Set();

    despesas.forEach(despesa => {
        const data = new Date(despesa.data);
        const mesAno = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
        mesesUnicos.add(mesAno);

        if (!meses[mesAno]) {
            meses[mesAno] = { despesas: 0 };
        }
        meses[mesAno].despesas += despesa.valor;
    });

    const mesesOrdenados = Array.from(mesesUnicos).sort();
    const labels = mesesOrdenados;
    const dadosGastos = mesesOrdenados.map(mes => meses[mes].despesas);

    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Gastos',
                    data: dadosGastos,
                    backgroundColor: '#FF5722',
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

// Função para criar o gráfico de pizza de investimentos
function criarGraficoInvestimentos(investimentos) {
    const ctx = document.getElementById('grafico-investimentos');
    if (!ctx) return;

    const dados = investimentos.map(investimento => investimento.valor);
    const labels = investimentos.map(investimento => investimento.descricao);

    new Chart(ctx.getContext('2d'), {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: dados,
                    backgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                    ]
                }
            ]
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: R$ ${value.toFixed(2)}`;
                        }
                    }
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