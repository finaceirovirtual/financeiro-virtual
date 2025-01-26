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

    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value.trim();
    const data = document.getElementById('data').value;
    const tipo = document.getElementById('tipo').value;
    const ticker = document.getElementById('ticker').value.trim().toLowerCase();

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

        // Atualiza o saldo atual (deduz o valor investido)
        const saldoAtualRef = firestore.collection("usuarios").doc(user.uid).collection("saldo").doc("atual");
        const saldoAtualDoc = await saldoAtualRef.get();

        if (saldoAtualDoc.exists) {
            const saldoAtual = saldoAtualDoc.data().valor;
            const novoSaldo = saldoAtual - valor;

            await saldoAtualRef.update({
                valor: novoSaldo
            });
        } else {
            // Se o saldo não existir, cria um novo saldo
            await saldoAtualRef.set({
                valor: -valor
            });
        }

        alert("Investimento salvo com sucesso!");
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
    } catch (error) {
        console.error("Erro ao salvar investimento:", error);
        alert("Erro ao salvar investimento: " + error.message);
    }
});

// Funções para buscar preços de ações e criptomoedas (mantenha as mesmas)