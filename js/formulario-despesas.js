import { auth, onAuthStateChanged } from './firebase.js';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore();

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    }
});

// Adiciona uma despesa ao Firestore
document.getElementById('form-despesas').addEventListener('submit', async function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    // Obtém o ID do usuário logado
    const user = auth.currentUser;

    if (user) {
        try {
            // Adiciona a despesa ao Firestore
            await addDoc(collection(db, 'despesas'), {
                userId: user.uid,
                valor: valor,
                descricao: descricao,
                data: data,
                categoria: categoria,
                timestamp: new Date() // Adiciona a data e hora atual
            });

            alert('Despesa adicionada com sucesso!');
            window.location.href = 'dashboard.html'; // Redireciona para o dashboard
        } catch (error) {
            console.error('Erro ao adicionar despesa:', error);
            alert('Erro ao adicionar despesa. Tente novamente.');
        }
    } else {
        alert('Usuário não autenticado. Faça login novamente.');
        window.location.href = 'login.html';
    }
});

// Botão de sair
document.getElementById('btn-sair').addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'login.html'; // Redireciona para a página de login
    }).catch((error) => {
        console.error('Erro ao sair:', error);
    });
});