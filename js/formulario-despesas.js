import { auth, firestore } from './firebase.js';
import { collection, addDoc } from "firebase/firestore";

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
        await addDoc(collection(firestore, "usuarios", user.uid, "despesas"), {
            descricao: descricao,
            valor: valor,
            data: data,
            categoria: categoria,
            dataRegistro: new Date().toISOString()
        });

        alert("Despesa salva com sucesso!");
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
    } catch (error) {
        console.error("Erro ao salvar despesa:", error.message);
        alert("Erro ao salvar despesa: " + error.message);
    }
});