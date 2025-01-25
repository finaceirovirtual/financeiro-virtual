import { auth, onAuthStateChanged, firestore, collection, getDocs, signOut } from '/assets/js/firebase.js';

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
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
        const totalInvestimentos = investimentos.reduce((total, investimento) => total + investimento.valor, 0);

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
        const querySnapshot = await getDocs(collection(firestore, "usuarios", uid, colecao));
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
    signOut(auth).then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Erro ao sair:', error);
    });
});