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

// Referências globais
const auth = firebase.auth();
const firestore = firebase.firestore();

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

// Função para carregar os dados do Firestore
async function carregarDados() {
    const user = auth.currentUser;
    if (!user) {
        alert("Usuário não autenticado. Faça login novamente.");
        window.location.href = "login.html";
        return { ganhos: [], despesas: [], investimentos: [] };
    }

    try {
        // Busca ganhos
        const ganhosSnapshot = await firestore.collection("usuarios").doc(user.uid).collection("ganhos").get();
        const ganhos = ganhosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Busca despesas
        const despesasSnapshot = await firestore.collection("usuarios").doc(user.uid).collection("despesas").get();
        const despesas = despesasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Busca investimentos
        const investimentosSnapshot = await firestore.collection("usuarios").doc(user.uid).collection("investimentos").get();
        const investimentos = investimentosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return { ganhos, despesas, investimentos };
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        alert("Erro ao carregar dados. Tente novamente.");
        return { ganhos: [], despesas: [], investimentos: [] };
    }
}

// Função para filtrar os dados com base no período
function filtrarDadosPorPeriodo(dados, periodo) {
    const hoje = new Date();
    console.log(`Filtrando para o período: ${periodo}`);
    console.log("Dados antes do filtro:", dados);

    const dadosFiltrados = dados.filter(item => {
        // Converte a data do item para um objeto Date
        const dataItem = new Date(item.data);
        console.log("Data do item:", dataItem);

        switch (periodo) {
            case 'diario':
                // Filtra por dia
                return (
                    dataItem.getDate() === hoje.getDate() &&
                    dataItem.getMonth() === hoje.getMonth() &&
                    dataItem.getFullYear() === hoje.getFullYear()
                );
            case 'semanal':
                // Filtra por semana
                const inicioSemana = new Date(hoje);
                inicioSemana.setDate(hoje.getDate() - hoje.getDay()); // Domingo da semana atual
                const fimSemana = new Date(inicioSemana);
                fimSemana.setDate(inicioSemana.getDate() + 6); // Sábado da semana atual
                return dataItem >= inicioSemana && dataItem <= fimSemana;
            case 'mensal':
                // Filtra por mês
                return (
                    dataItem.getMonth() === hoje.getMonth() &&
                    dataItem.getFullYear() === hoje.getFullYear()
                );
            case 'anual':
                // Filtra por ano
                return dataItem.getFullYear() === hoje.getFullYear();
            default:
                return true; // Sem filtro
        }
    });

    console.log("Dados filtrados:", dadosFiltrados);
    return dadosFiltrados;
}

// Função para criar o gráfico de ganhos
function criarGraficoGanhos(dados) {
    const ctx = document.getElementById('grafico-ganhos').getContext('2d');
    destruirGrafico(graficoGanhos); // Destrói o gráfico anterior, se existir
    graficoGanhos = new Chart(ctx, {
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
    graficoDespesas = new Chart(ctx, {
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
    graficoInvestimentos = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dados.map(i => i.data),
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
async function alternarGrafico(tipo) {
    document.querySelectorAll('.grafico').forEach(canvas => {
        canvas.style.display = 'none';
    });

    const periodo = document.getElementById('periodo').value;
    const { ganhos, despesas, investimentos } = await carregarDados();

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
document.getElementById('btn-filtrar').addEventListener('click', async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do botão
    const tipoAtivo = document.querySelector('.toggle-graficos button.active').id.replace('btn-', '');
    await alternarGrafico(tipoAtivo); // Atualiza o gráfico ativo com o novo filtro
});

// Inicializa a página
document.addEventListener('DOMContentLoaded', async () => {
    await alternarGrafico('ganhos'); // Exibe o gráfico de ganhos por padrão
});