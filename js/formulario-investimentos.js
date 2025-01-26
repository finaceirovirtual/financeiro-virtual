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

// Adiciona um listener para o formulário
document.getElementById('form-investimentos').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Obtém os valores dos campos
    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value.trim();
    const data = document.getElementById('data').value;
    const tipo = document.getElementById('tipo').value;
    const ticker = document.getElementById('ticker').value.trim().toLowerCase(); // Converte para minúsculas

    // Validação dos campos
    if (!valor || !descricao || !data || !tipo || !ticker) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        const user = auth.currentUser;
        if (!user) {
            alert("Usuário não autenticado. Faça login novamente.");
            window.location.href = "login.html";
            return;
        }

        // Busca o preço atual do ativo
        let precoAtual = 0;
        if (tipo === "acoes") {
            precoAtual = await buscarPrecoAcao(ticker);
        } else if (tipo === "criptomoedas") {
            precoAtual = await buscarPrecoCripto(ticker);
        } else {
            // Para outros tipos de investimento, a quantidade será 1 (não aplicável)
            precoAtual = 1;
        }

        // Calcula a quantidade automaticamente
        const quantidade = valor / precoAtual;

        // Salva o investimento no Firestore
        await firestore.collection("usuarios").doc(user.uid).collection("investimentos").add({
            valor: valor,
            descricao: descricao,
            data: data,
            tipo: tipo,
            ticker: ticker,
            quantidade: quantidade,
            dataRegistro: new Date().toISOString()
        });

        alert("Investimento salvo com sucesso!");
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
    } catch (error) {
        console.error("Erro ao salvar investimento:", error);
        alert("Erro ao salvar investimento: " + error.message);
    }
});

// Função para buscar o preço de uma ação usando Alpha Vantage
async function buscarPrecoAcao(ticker) {
    const apiKey = "YII36O0SMZRKNRV0"; // Sua chave da Alpha Vantage
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`);
    const data = await response.json();

    if (data["Global Quote"] && data["Global Quote"]["05. price"]) {
        return parseFloat(data["Global Quote"]["05. price"]);
    } else {
        throw new Error("Não foi possível obter o preço da ação.");
    }
}

// Função para buscar o preço de uma criptomoeda usando CoinGecko
async function buscarPrecoCripto(ticker) {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ticker}&vs_currencies=usd`);
    const data = await response.json();

    if (data[ticker] && data[ticker].usd) {
        return parseFloat(data[ticker].usd);
    } else {
        throw new Error("Não foi possível obter o preço da criptomoeda.");
    }
}