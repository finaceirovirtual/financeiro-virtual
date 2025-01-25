import { 
    auth, 
    onAuthStateChanged, 
    firestore, 
    collection, 
    getDocs,
    signOut 
} from './firebase.js';
import { 
    Chart, 
    CategoryScale, 
    LinearScale, 
    BarController, 
    BarElement,
    LineController, 
    LineElement, 
    PointElement 
} from 'chart.js';

// Registra as escalas e componentes necessários
Chart.register(
    CategoryScale, 
    LinearScale, 
    BarController, 
    BarElement,
    LineController, 
    LineElement, 
    PointElement
);

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    } else {
        // Exibe o nome do usuário no dashboard
        document.querySelector('h2').textContent = `Bem-vindo, ${user.displayName || 'Usuário'}!`;

        // Carrega os dados financeiros do usuário
        carregarDadosFinanceiros(user.uid);
    }
});

// Função para carregar dados financeiros
async function carregarDadosFinanceiros(uid) {
    try {
        // Recupera os dados do Firestore
        const ganhos = await recuperarDados(uid, "ganhos");
        const despesas = await recuperarDados(uid, "despesas");
        const investimentos = await recuperarDados(uid, "investimentos");

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
    if (!ctx) {
        console.error("Elemento 'grafico-despesas' não encontrado.");
        return;
    }

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

    new Chart(ctx.getContext('2d'), {
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
    const ctx = document.getElementById('grafico-investimentos');
    if (!ctx) {
        console.error("Elemento 'grafico-investimentos' não encontrado.");
        return;
    }

    // Agrupa os dados por mês
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

    // Ordena os meses
    const mesesOrdenados = Array.from(mesesUnicos).sort();

    // Prepara os dados para o gráfico
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
                    borderColor: '#FFD700', // Dourado
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
        window.location.href = 'login.html'; // Redireciona para a página de login
    }).catch((error) => {
        console.error('Erro ao sair:', error);
    });
});