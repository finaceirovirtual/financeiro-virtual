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

const auth = firebase.auth();
const firestore = firebase.firestore();

// Carrega as despesas do usuário
async function carregarDespesas() {
    const user = auth.currentUser;
    if (!user) {
        alert("Usuário não autenticado. Faça login novamente.");
        window.location.href = "login.html";
        return;
    }

    const listaDespesas = document.getElementById('lista-despesas');
    listaDespesas.innerHTML = ""; // Limpa a lista

    try {
        const querySnapshot = await firestore.collection("usuarios").doc(user.uid).collection("despesas").get();
        querySnapshot.forEach((doc) => {
            const despesa = doc.data();
            const despesaItem = document.createElement('div');
            despesaItem.className = 'despesa-item';
            despesaItem.innerHTML = `
                <p><strong>Descrição:</strong> ${despesa.descricao}</p>
                <p><strong>Valor:</strong> R$ ${despesa.valor}</p>
                <p><strong>Data:</strong> ${despesa.data}</p>
                <p><strong>Categoria:</strong> ${despesa.categoria}</p>
                <button onclick="editarDespesa('${doc.id}')">Editar</button>
                <button onclick="excluirDespesa('${doc.id}')">Excluir</button>
            `;
            listaDespesas.appendChild(despesaItem);
        });
    } catch (error) {
        console.error("Erro ao carregar despesas:", error);
        alert("Erro ao carregar despesas: " + error.message);
    }
}

// Função para editar uma despesa
async function editarDespesa(id) {
    const novoValor = prompt("Digite o novo valor:");
    if (novoValor === null || isNaN(novoValor)) {
        alert("Valor inválido.");
        return;
    }

    try {
        const user = auth.currentUser;
        await firestore.collection("usuarios").doc(user.uid).collection("despesas").doc(id).update({
            valor: parseFloat(novoValor)
        });
        alert("Despesa atualizada com sucesso!");
        carregarDespesas(); // Recarrega a lista
    } catch (error) {
        console.error("Erro ao editar despesa:", error);
        alert("Erro ao editar despesa: " + error.message);
    }
}

// Função para excluir uma despesa
async function excluirDespesa(id) {
    const confirmacao = confirm("Tem certeza que deseja excluir esta despesa?");
    if (!confirmacao) return;

    try {
        const user = auth.currentUser;
        await firestore.collection("usuarios").doc(user.uid).collection("despesas").doc(id).delete();
        alert("Despesa excluída com sucesso!");
        carregarDespesas(); // Recarrega a lista
    } catch (error) {
        console.error("Erro ao excluir despesa:", error);
        alert("Erro ao excluir despesa: " + error.message);
    }
}

// Carrega as despesas ao abrir a página
window.onload = carregarDespesas;