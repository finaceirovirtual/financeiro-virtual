import { auth, firestore, collection, addDoc } from './firebase.js';

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
        await addDoc(collection(firestore, "usuarios", user.uid, "ganhos"), {
            valor: valor,
            descricao: descricao,
            data: data,
            categoria: categoria,
            dataRegistro: new Date().toISOString()
        });

        alert("Ganho salvo com sucesso!");
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
    } catch (error) {
        console.error("Erro ao salvar ganho:", error.message);
        alert("Erro ao salvar ganho: " + error.message);
    }
});