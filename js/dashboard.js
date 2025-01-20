import { auth, onAuthStateChanged, signOut } from './firebase.js';

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    } else {
        // Exibe o nome do usuário no dashboard
        document.querySelector('h2').textContent = `Bem-vindo, ${user.displayName || 'Usuário'}!`;

        // Carrega os dados financeiros do usuário
        carregarDadosFinanceiros();
    }
});

// Função para carregar dados financeiros
function carregarDadosFinanceiros() {
    // Recupera os dados do localStorage
    const ganhos = JSON.parse(localStorage.getItem('ganhos')) || [];
    const despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    const investimentos = JSON.parse(localStorage.getItem('investimentos')) || [];

    // Calcula os totais
    const totalGanhos = ganhos.reduce((total, ganho) => total + ganho.valor, 0);
    const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
    const totalInvestimentos = investimentos.reduce((total, investimento) => total + investimento.valor, 0);

    // Calcula o saldo atual (ganhos - despesas - investimentos)
    const saldoAtual = totalGanhos - totalDespesas - totalInvestimentos;

    // Atualiza os valores na página
    document.getElementById('saldo-atual').textContent = `R$ ${saldoAtual.toFixed(2)}`;
    document.getElementById('despesas-mes').textContent = `R$ ${totalDespesas.toFixed(2)}`;
    document.getElementById('investimentos').textContent = `R$ ${totalInvestimentos.toFixed(2)}`;

    // Cria os gráficos
    criarGraficoDespesas(ganhos, despesas, investimentos);
    criarGraficoInvestimentos(investimentos);
}

// Função para criar o gráfico de despesas
function criarGraficoDespesas(ganhos, despesas, investimentos) {
    // Agrupa os dados por mês
    const meses = {};
    const mesesUnicos = new Set();

    // Processa ganhos, despesas e investimentos
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

    // Ordena os meses
    const mesesOrdenados = Array.from(mesesUnicos).sort();

    // Prepara os dados para o gráfico
    const labels = mesesOrdenados;
    const dadosGastos = mesesOrdenados.map(mes => meses[mes].despesas);
    const dadosSaldo = mesesOrdenados.map(mes => meses[mes].ganhos - meses[mes].despesas - meses[mes].investimentos);
    const dadosInvestimentos = mesesOrdenados.map(mes => meses[mes].investimentos);

    const ctx = document.getElementById('grafico-despesas').getContext('2d');
    new window.Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Gastos',
                    data: dadosGastos,
                    backgroundColor: '#FF5722', // Vermelho
                },
                {
                    label: 'Saldo Final',
                    data: dadosSaldo,
                    backgroundColor: '#4CAF50', // Verde
                },
                {
                    label: 'Investimentos',
                    data: dadosInvestimentos,
                    backgroundColor: '#FFD700', // Dourado
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
                    stacked: false, // Barras não empilhadas
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
    const categorias = {};
    investimentos.forEach(investimento => {
        if (categorias[investimento.tipo]) {
            categorias[investimento.tipo] += investimento.valor;
        } else {
            categorias[investimento.tipo] = investimento.valor;
        }
    });

    const ctx = document.getElementById('grafico-investimentos').getContext('2d');
    new window.Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(categorias),
            datasets: [{
                label: 'Investimentos',
                data: Object.values(categorias),
                backgroundColor: ['#4CAF50', '#2196F3', '#FFD700', '#FF5722', '#9C27B0'],
            }]
        },
        options: {
            responsive: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
        },
    });
}

// Botão de sair
document.getElementById('btn-sair').addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'login.html'; // Redireciona para a página de login
    }).catch((error) => {
        console.error('Erro ao sair:', error);
    });
});