import { auth, onAuthStateChanged, signOut } from './firebase.js';
import Chart from 'chart.js/auto';

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    } else {
        // Exibe o nome do usuário no dashboard
        document.querySelector('h2').textContent = `Bem-vindo, ${user.displayName || 'Usuário'}!`;

        // Carrega os dados financeiros do usuário (exemplo)
        carregarDadosFinanceiros();
    }
});

// Função para carregar dados financeiros (exemplo)
function carregarDadosFinanceiros() {
    // Exemplo de dados
    const saldoAtual = 5000.00;
    const despesasMes = 1200.00;
    const investimentos = 3000.00;

    // Atualiza os valores na página
    document.getElementById('saldo-atual').textContent = `R$ ${saldoAtual.toFixed(2)}`;
    document.getElementById('despesas-mes').textContent = `R$ ${despesasMes.toFixed(2)}`;
    document.getElementById('investimentos').textContent = `R$ ${investimentos.toFixed(2)}`;

    // Cria os gráficos
    criarGraficoDespesas();
    criarGraficoInvestimentos();
}

// Função para criar o gráfico de despesas
function criarGraficoDespesas() {
    const ctx = document.getElementById('grafico-despesas').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Alimentação', 'Transporte', 'Lazer', 'Outros'],
            datasets: [{
                label: 'Despesas do Mês',
                data: [500, 300, 200, 200],
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
function criarGraficoInvestimentos() {
    const ctx = document.getElementById('grafico-investimentos').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Ações', 'Poupança', 'Fundos'],
            datasets: [{
                label: 'Investimentos',
                data: [1500, 1000, 500],
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