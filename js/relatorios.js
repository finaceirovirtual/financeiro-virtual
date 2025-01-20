// Função para carregar os relatórios
function carregarRelatorios() {
    // Recupera os dados do localStorage
    const ganhos = JSON.parse(localStorage.getItem('ganhos')) || [];
    const despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    const investimentos = JSON.parse(localStorage.getItem('investimentos')) || [];

    // Cria os gráficos
    criarGraficoGanhos(ganhos);
    criarGraficoDespesas(despesas);
    criarGraficoInvestimentos(investimentos);
}

// Função para criar o gráfico de ganhos
function criarGraficoGanhos(ganhos) {
    const ctx = document.getElementById('grafico-ganhos').getContext('2d');
    new window.Chart(ctx, {
        type: 'bar',
        data: {
            labels: ganhos.map(g => g.descricao),
            datasets: [{
                label: 'Ganhos',
                data: ganhos.map(g => g.valor),
                backgroundColor: '#4CAF50',
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

// Função para criar o gráfico de despesas
function criarGraficoDespesas(despesas) {
    const ctx = document.getElementById('grafico-despesas').getContext('2d');
    new window.Chart(ctx, {
        type: 'pie',
        data: {
            labels: despesas.map(d => d.categoria),
            datasets: [{
                label: 'Despesas',
                data: despesas.map(d => d.valor),
                backgroundColor: ['#FF5722', '#2196F3', '#FFD700', '#9C27B0'],
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

// Função para criar o gráfico de investimentos
function criarGraficoInvestimentos(investimentos) {
    const ctx = document.getElementById('grafico-investimentos').getContext('2d');
    new window.Chart(ctx, {
        type: 'line',
        data: {
            labels: investimentos.map(i => i.data),
            datasets: [{
                label: 'Investimentos',
                data: investimentos.map(i => i.valor),
                borderColor: '#4CAF50',
                fill: false,
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
    localStorage.removeItem('usuarioLogado'); // Remove o usuário logado
    window.location.href = 'login.html'; // Redireciona para a página de login
});

// Carrega os relatórios ao abrir a página
carregarRelatorios();