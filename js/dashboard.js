import { auth, onAuthStateChanged, signOut } from './firebase.js';
import Chart from 'chart.js/auto';

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

    // Calcula o saldo atual
    const saldoAtual = totalGanhos - totalDespesas;

    // Atualiza os valores na página
    document.getElementById('saldo-atual').textContent = `R$ ${saldoAtual.toFixed(2)}`;
    document.getElementById('despesas-mes').textContent = `R$ ${totalDespesas.toFixed(2)}`;
    document.getElementById('investimentos').textContent = `R$ ${totalInvestimentos.toFixed(2)}`;

    // Cria os gráficos
    criarGraficoDespesas(despesas);
    criarGraficoInvestimentos(investimentos);
}

// Função para criar o gráfico de despesas
function criarGraficoDespesas(despesas) {
    const categorias = {};
    despesas.forEach(despesa => {
        if (categorias[despesa.categoria]) {
            categorias[despesa.categoria] += despesa.valor;
        } else {
            categorias[despesa.categoria] = despesa.valor;
        }
    });

    const ctx = document.getElementById('grafico-despesas').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(categorias),
            datasets: [{
                label: 'Despesas do Mês',
                data: Object.values(categorias),
                backgroundColor: ['#4CAF50', '#2196F3', '#FFD700', '#FF5722'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });
}

// Função para criar o gráfico de investimentos
function criarGraficoInvestimentos(investimentos) {
    const tipos = {};
    investimentos.forEach(investimento => {
        if (tipos[investimento.tipo]) {
            tipos[investimento.tipo] += investimento.valor;
        } else {
            tipos[investimento.tipo] = investimento.valor;
        }
    });

    const ctx = document.getElementById('grafico-investimentos').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(tipos),
            datasets: [{
                label: 'Investimentos',
                data: Object.values(tipos),
                backgroundColor: ['#4CAF50', '#2196F3', '#FFD700'],
            }]
        },
        options: {
            responsive: true,
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