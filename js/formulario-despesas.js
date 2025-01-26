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
document.getElementById('form-despesa').addEventListener('submit', async function (event) {
    event.preventDefault();

    const descricao = document.getElementById('descricao').value.trim();
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    if (!descricao || !valor || !data || !categoria) {
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

        // Salva a despesa no Firestore
        await firestore.collection("usuarios").doc(user.uid).collection("despesas").add({
            descricao: descricao,
            valor: valor,
            data: data,
            categoria: categoria,
            dataRegistro: new Date().toISOString()
        });

        alert("Despesa salva com sucesso!");
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
    } catch (error) {
        console.error("Erro ao salvar despesa:", error);
        alert("Erro ao salvar despesa: " + error.message);
    }
});