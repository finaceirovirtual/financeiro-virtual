import { auth, onAuthStateChanged, signOut } from './firebase.js';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const db = getFirestore();

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    } else {
        carregarRelatorios();
    }
});

// Função para carregar os relatórios
async function carregarRelatorios() {
    const user = auth.currentUser;

    if (user) {
        try {
            // Consulta os ganhos, despesas e investimentos do usuário
            const ganhosQuery = query(collection(db, 'ganhos'), where('userId', '==', user.uid));
            const despesasQuery = query(collection(db, 'despesas'), where('userId', '==', user.uid));
            const investimentosQuery = query(collection(db, 'investimentos'), where('userId', '==', user.uid));

            const [ganhosSnapshot, despesasSnapshot, investimentosSnapshot] = await Promise.all([
                getDocs(ganhosQuery),
                getDocs(despesasQuery),
                getDocs(investimentosQuery)
            ]);

            const ganhos = ganhosSnapshot.docs.map(doc => doc.data());
            const despesas = despesasSnapshot.docs.map(doc => doc.data());
            const investimentos = investimentosSnapshot.docs.map(doc => doc.data());

            // Cria os gráficos
            criarGraficoGanhos(ganhos);
            criarGraficoDespesas(despesas);
            criarGraficoInvestimentos(investimentos);
        } catch (error) {
            console.error('Erro ao carregar relatórios:', error);
            alert('Erro ao carregar relatórios. Tente novamente.');
        }
    }
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
    signOut(auth).then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Erro ao sair:', error);
    });
});