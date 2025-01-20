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

// Função para carregar os dados do localStorage
function carregarDados() {
    const ganhos = JSON.parse(localStorage.getItem('ganhos')) || [];
    const despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    const investimentos = JSON.parse(localStorage.getItem('investimentos')) || [];
    return { ganhos, despesas, investimentos };
}

// Função para filtrar os dados com base no período
function filtrarDadosPorPeriodo(dados, periodo) {
    const hoje = new Date();
    return dados.filter(item => {
        // Se o item não tiver uma data, assume a data atual
        const dataItem = item.data ? new Date(item.data) : new Date();
        switch (periodo) {
            case 'diario':
                return dataItem.toDateString() === hoje.toDateString();
            case 'semanal':
                const inicioSemana = new Date(hoje.setDate(hoje.getDate() - hoje.getDay()));
                const fimSemana = new Date(hoje.setDate(hoje.getDate() - hoje.getDay() + 6));
                return dataItem >= inicioSemana && dataItem <= fimSemana;
            case 'mensal':
                return dataItem.getMonth() === hoje.getMonth() && dataItem.getFullYear() === hoje.getFullYear();
            case 'anual':
                return dataItem.getFullYear() === hoje.getFullYear();
            default:
                return true;
        }
    });
}

// Função para criar o gráfico de ganhos
function criarGraficoGanhos(dados) {
    const ctx = document.getElementById('grafico-ganhos').getContext('2d');
    destruirGrafico(graficoGanhos); // Destrói o gráfico anterior, se existir
    graficoGanhos = new window.Chart(ctx, {
        type: 'bar',
        data: {
            labels: dados.map(g => g.descricao),
            datasets: [{
                label: 'Ganhos',
                data: dados.map(g => g.valor),
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
function criarGraficoDespesas(dados) {
    const ctx = document.getElementById('grafico-despesas').getContext('2d');
    destruirGrafico(graficoDespesas); // Destrói o gráfico anterior, se existir
    graficoDespesas = new window.Chart(ctx, {
        type: 'pie',
        data: {
            labels: dados.map(d => d.categoria),
            datasets: [{
                label: 'Despesas',
                data: dados.map(d => d.valor),
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
function criarGraficoInvestimentos(dados) {
    const ctx = document.getElementById('grafico-investimentos').getContext('2d');
    destruirGrafico(graficoInvestimentos); // Destrói o gráfico anterior, se existir
    graficoInvestimentos = new window.Chart(ctx, {
        type: 'line',
        data: {
            labels: dados.map(i => i.data || new Date().toISOString().split('T')[0]), // Usa a data atual se não houver data
            datasets: [{
                label: 'Investimentos',
                data: dados.map(i => i.valor),
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

    const periodo = document.getElementById('periodo').value;
    const { ganhos, despesas, investimentos } = carregarDados();

    if (tipo === 'ganhos') {
        const ganhosFiltrados = filtrarDadosPorPeriodo(ganhos, periodo);
        document.getElementById('grafico-ganhos').style.display = 'block';
        criarGraficoGanhos(ganhosFiltrados);
    } else if (tipo === 'despesas') {
        const despesasFiltradas = filtrarDadosPorPeriodo(despesas, periodo);
        document.getElementById('grafico-despesas').style.display = 'block';
        criarGraficoDespesas(despesasFiltradas);
    } else if (tipo === 'investimentos') {
        const investimentosFiltrados = filtrarDadosPorPeriodo(investimentos, periodo);
        document.getElementById('grafico-investimentos').style.display = 'block';
        criarGraficoInvestimentos(investimentosFiltrados);
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
    const tipoAtivo = document.querySelector('.toggle-graficos button.active').id.replace('btn-', '');
    alternarGrafico(tipoAtivo); // Atualiza o gráfico ativo com o novo filtro
});

// Inicializa a página
alternarGrafico('ganhos'); // Exibe o gráfico de ganhos por padrão