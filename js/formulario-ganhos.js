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
document.getElementById('form-ganhos').addEventListener('submit', async function (event) {
    event.preventDefault();

    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value.trim();
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    if (!valor || !descricao || !data || !categoria) {
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

        // Salva o ganho no Firestore
        await firestore.collection("usuarios").doc(user.uid).collection("ganhos").add({
            valor: valor,
            descricao: descricao,
            data: data,
            categoria: categoria,
            dataRegistro: new Date().toISOString()
        });

        alert("Ganho salvo com sucesso!");
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
    } catch (error) {
        console.error("Erro ao salvar ganho:", error);
        alert("Erro ao salvar ganho: " + error.message);
    }
});