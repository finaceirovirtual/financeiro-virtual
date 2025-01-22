import { auth, firestore, collection, addDoc } from './firebase.js';

document.getElementById('form-ganhos').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os dados do formulário
    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value.trim();
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    // Validações
    if (descricao === "" || isNaN(valor) || data === "" || categoria === "") {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Salva no Firestore
    const uid = auth.currentUser.uid; // ID do usuário logado
    salvarGanho(uid, descricao, valor, data, categoria);

    // Exibe mensagem de sucesso
    alert('Ganho adicionado com sucesso!');
    window.location.href = 'dashboard.html'; // Redireciona para o dashboard
});

// Função para salvar ganho no Firestore
async function salvarGanho(uid, descricao, valor, data, categoria) {
    try {
        const ganhosRef = collection(firestore, "usuarios", uid, "ganhos"); // Referência à coleção de ganhos do usuário
        await addDoc(ganhosRef, {
            descricao: descricao,
            valor: valor,
            data: data,
            categoria: categoria,
            dataRegistro: new Date().toISOString()
        });
        console.log("Ganho salvo no Firestore com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar ganho no Firestore:", error);
    }
}