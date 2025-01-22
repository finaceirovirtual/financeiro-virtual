import { auth, firestore, collection, addDoc } from './firebase.js';

document.getElementById('form-investimentos').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os dados do formulário
    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value.trim();
    const data = document.getElementById('data').value;
    const tipo = document.getElementById('tipo').value;

    // Validações
    if (descricao === "" || isNaN(valor) || data === "" || tipo === "") {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Salva no Firestore
    const uid = auth.currentUser.uid; // ID do usuário logado
    salvarInvestimento(uid, descricao, valor, data, tipo);

    // Exibe mensagem de sucesso
    alert('Investimento adicionado com sucesso!');
    window.location.href = 'dashboard.html'; // Redireciona para o dashboard
});

// Função para salvar investimento no Firestore
async function salvarInvestimento(uid, descricao, valor, data, tipo) {
    try {
        const investimentosRef = collection(firestore, "usuarios", uid, "investimentos"); // Referência à coleção de investimentos do usuário
        await addDoc(investimentosRef, {
            descricao: descricao,
            valor: valor,
            data: data,
            tipo: tipo,
            dataRegistro: new Date().toISOString()
        });
        console.log("Investimento salvo no Firestore com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar investimento no Firestore:", error);
    }
}