import { 
    auth, 
    firestore, 
    collection, 
    addDoc 
} from './firebase.js';

document.getElementById('form-despesa').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os dados do formulário
    const descricao = document.getElementById('descricao').value.trim();
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    // Validações
    if (descricao === "" || isNaN(valor) || data === "" || categoria === "") {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Salva no Firestore
    const uid = auth.currentUser.uid; // ID do usuário logado
    salvarDespesa(uid, descricao, valor, data, categoria);

    // Exibe mensagem de sucesso
    alert('Despesa adicionada com sucesso!');
    window.location.href = 'dashboard.html'; // Redireciona para o dashboard
});

// Função para salvar despesa no Firestore
async function salvarDespesa(uid, descricao, valor, data, categoria) {
    try {
        const despesasRef = collection(firestore, "usuarios", uid, "despesas"); // Referência à coleção de despesas do usuário
        await addDoc(despesasRef, {
            descricao: descricao,
            valor: valor,
            data: data,
            categoria: categoria,
            dataRegistro: new Date().toISOString()
        });
        console.log("Despesa salva no Firestore com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar despesa no Firestore:", error);
    }
}