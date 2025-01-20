// Variáveis globais para armazenar as instâncias dos gráficos
let graficoGanhos = null;
let graficoDespesas = null;
let graficoInvestimentos = null;

// Função para destruir um gráfico existente
function destruirGrafico(grafico) {
    if (grafico) {
        grafico.destroy();
    }
}

// Função para criar o gráfico de ganhos
function criarGraficoGanhos() {
    const ctx = document.getElementById('grafico-ganhos').getContext('2d');
    destruirGrafico(graficoGanhos); // Destrói o gráfico anterior, se existir
    graficoGanhos = new window.Chart(ctx, {
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
function criarGraficoDespesas() {
    const ctx = document.getElementById('grafico-despesas').getContext('2d');
    destruirGrafico(graficoDespesas); // Destrói o gráfico anterior, se existir
    graficoDespesas = new window.Chart(ctx, {
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
function criarGraficoInvestimentos() {
    const ctx = document.getElementById('grafico-investimentos').getContext('2d');
    destruirGrafico(graficoInvestimentos); // Destrói o gráfico anterior, se existir
    graficoInvestimentos = new window.Chart(ctx, {
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

// Função para alternar entre os gráficos
function alternarGrafico(tipo) {
    document.querySelectorAll('.grafico').forEach(canvas => {
        canvas.style.display = 'none';
    });

    if (tipo === 'ganhos') {
        document.getElementById('grafico-ganhos').style.display = 'block';
        criarGraficoGanhos();
    } else if (tipo === 'despesas') {
        document.getElementById('grafico-despesas').style.display = 'block';
        criarGraficoDespesas();
    } else if (tipo === 'investimentos') {
        document.getElementById('grafico-investimentos').style.display = 'block';
        criarGraficoInvestimentos();
    }
}

// Evento para alternar entre os gráficos
document.getElementById('btn-ganhos').addEventListener('click', () => {
    alternarGrafico('ganhos');
    document.querySelectorAll('.toggle-graficos button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-ganhos').classList.add('active');
});

document.getElementById('btn-despesas').addEventListener('click', () => {
    alternarGrafico('despesas');
    document.querySelectorAll('.toggle-graficos button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-despesas').classList.add('active');
});

document.getElementById('btn-investimentos').addEventListener('click', () => {
    alternarGrafico('investimentos');
    document.querySelectorAll('.toggle-graficos button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-investimentos').classList.add('active');
});

// Evento para filtrar os dados
document.getElementById('btn-filtrar').addEventListener('click', () => {
    const periodo = document.getElementById('periodo').value;
    console.log(`Filtrando para o período: ${periodo}`);
    // Aqui você pode adicionar a lógica para filtrar os dados reais
});

// Inicializa a página
alternarGrafico('ganhos'); // Exibe o gráfico de ganhos por padrão