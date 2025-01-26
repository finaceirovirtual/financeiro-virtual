// Função para criar o gráfico de pizza de investimentos
function criarGraficoInvestimentos(investimentos) {
    const ctx = document.getElementById('grafico-investimentos');
    if (!ctx) return;

    const dados = investimentos.map(investimento => investimento.valor);
    const labels = investimentos.map(investimento => investimento.descricao);

    new Chart(ctx.getContext('2d'), {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: dados,
                    backgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                    ]
                }
            ]
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: R$ ${value.toFixed(2)}`;
                        }
                    }
                }
            }
        },
    });
}

// Função para buscar preços atuais dos investimentos e exibir a quantidade
async function atualizarPrecosInvestimentos(investimentos) {
    const apiKeyAlphaVantage = 'YII36O0SMZRKNRV0'; // Sua chave da Alpha Vantage
    let totalInvestimentos = 0;

    // Limpa a lista de investimentos antes de exibir os novos
    const listaInvestimentos = document.getElementById('lista-investimentos');
    listaInvestimentos.innerHTML = "";

    for (const investimento of investimentos) {
        let precoAtual = 0;

        if (investimento.tipo === 'acoes') {
            // Busca o preço da ação usando Alpha Vantage
            precoAtual = await buscarPrecoAcao(investimento.ticker, apiKeyAlphaVantage);
        } else if (investimento.tipo === 'criptomoedas') {
            // Busca o preço da criptomoeda usando CoinGecko
            precoAtual = await buscarPrecoCripto(investimento.ticker);
        } else {
            // Para outros tipos de investimento, o preço é 1 (não aplicável)
            precoAtual = 1;
        }

        // Calcula o valor atual do investimento
        const valorAtual = precoAtual * investimento.quantidade;
        totalInvestimentos += valorAtual;

        // Exibe o investimento na lista
        const itemInvestimento = document.createElement('div');
        itemInvestimento.className = 'item-investimento';
        itemInvestimento.innerHTML = `
            <div class="investimento-header">
                <strong>${investimento.descricao}</strong>
                <span class="valor-atual">R$ ${valorAtual.toFixed(2)}</span>
            </div>
            <div class="investimento-detalhes">
                <span>Valor Investido: R$ ${investimento.valor.toFixed(2)}</span>
                <span>Quantidade: ${investimento.quantidade.toFixed(8)} ${investimento.ticker.toUpperCase()}</span>
            </div>
        `;
        listaInvestimentos.appendChild(itemInvestimento);
    }

    return totalInvestimentos;
}