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

const auth = firebase.auth();
const firestore = firebase.firestore();

// Elementos da página
const btnFiltrar = document.getElementById('btn-filtrar');
const dataInicio = document.getElementById('data-inicio');
const dataFim = document.getElementById('data-fim');
const tabelaResumo = document.getElementById('tabela-resumo').getElementsByTagName('tbody')[0];

// Gráficos
const ctxDespesasGanhos = document.getElementById('grafico-despesas-ganhos').getContext('2d');
const ctxInvestimentos = document.getElementById('grafico-investimentos').getContext('2d');

let graficoDespesasGanhos, graficoInvestimentos;

// Função para buscar dados
async function buscarDados(usuarioId, inicio, fim) {
    const despesas = await firestore.collection('usuarios').doc(usuarioId).collection('despesas')
        .where('data', '>=', inicio)
        .where('data', '<=', fim)
        .get();

    const ganhos = await firestore.collection('usuarios').doc(usuarioId).collection('ganhos')
        .where('data', '>=', inicio)
        .where('data', '<=', fim)
        .get();

    const investimentos = await firestore.collection('usuarios').doc(usuarioId).collection('investimentos')
        .where('data', '>=', inicio)
        .where('data', '<=', fim)
        .get();

    return { despesas, ganhos, investimentos };
}

// Função para calcular totais
function calcularTotais(despesas, ganhos, investimentos) {
    const totalDespesas = despesas.docs.reduce((total, doc) => total + doc.data().valor, 0);
    const totalGanhos = ganhos.docs.reduce((total, doc) => total + doc.data().valor, 0);
    const totalInvestimentos = investimentos.docs.reduce((total, doc) => total + doc.data().valor, 0);
    const lucro = totalGanhos - totalDespesas;

    return { totalDespesas, totalGanhos, totalInvestimentos, lucro };
}

// Função para atualizar gráficos
function atualizarGraficos(despesas, ganhos, investimentos) {
    const labels = ['Despesas', 'Ganhos', 'Investimentos'];
    const dadosDespesasGanhos = [despesas, ganhos, 0]; // Investimentos não entram aqui
    const dadosInvestimentos = [0, 0, investimentos]; // Apenas investimentos

    if (graficoDespesasGanhos) graficoDespesasGanhos.destroy();
    if (graficoInvestimentos) graficoInvestimentos.destroy();

    graficoDespesasGanhos = new Chart(ctxDespesasGanhos, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Valores',
                data: dadosDespesasGanhos,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        }
    });

    graficoInvestimentos = new Chart(ctxInvestimentos, {
        type: 'pie',
        data: {
            labels: ['Investimentos'],
            datasets: [{
                label: 'Valores',
                data: dadosInvestimentos,
                backgroundColor: ['#4BC0C0']
            }]
        }
    });
}

// Função para atualizar tabela
function atualizarTabela(totalDespesas, totalGanhos, totalInvestimentos, lucro) {
    tabelaResumo.innerHTML = `
        <tr>
            <td>Despesas</td>
            <td>R$ ${totalDespesas.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Ganhos</td>
            <td>R$ ${totalGanhos.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Investimentos</td>
            <td>R$ ${totalInvestimentos.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Lucro</td>
            <td>R$ ${lucro.toFixed(2)}</td>
        </tr>
    `;
}

// Evento de filtro
btnFiltrar.addEventListener('click', async () => {
    const usuario = auth.currentUser;
    if (!usuario) {
        alert("Usuário não autenticado. Faça login novamente.");
        window.location.href = "login.html";
        return;
    }

    const inicio = dataInicio.value;
    const fim = dataFim.value;

    if (!inicio || !fim) {
        alert("Por favor, selecione um período.");
        return;
    }

    const { despesas, ganhos, investimentos } = await buscarDados(usuario.uid, inicio, fim);
    const { totalDespesas, totalGanhos, totalInvestimentos, lucro } = calcularTotais(despesas, ganhos, investimentos);

    atualizarGraficos(totalDespesas, totalGanhos, totalInvestimentos);
    atualizarTabela(totalDespesas, totalGanhos, totalInvestimentos, lucro);
});

// Carregar dados ao abrir a página
window.addEventListener('load', () => {
    const usuario = auth.currentUser;
    if (usuario) {
        const hoje = new Date().toISOString().split('T')[0];
        dataInicio.value = hoje;
        dataFim.value = hoje;
        btnFiltrar.click(); // Carrega os dados automaticamente
    }
});