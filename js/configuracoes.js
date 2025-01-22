import { auth, onAuthStateChanged, updateProfile, updateEmail, updatePassword } from './firebase.js';

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'login.html';
    } else {
        // Preenche os campos com os dados do usuário
        document.getElementById('nome').value = user.displayName || '';
        document.getElementById('email').value = user.email || '';
    }
});

// Atualiza as informações do usuário
document.getElementById('form-configuracoes').addEventListener('submit', async function (event) {
    event.preventDefault();

    const user = auth.currentUser;

    if (user) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senhaAtual = document.getElementById('senha-atual').value;
        const novaSenha = document.getElementById('nova-senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;

        try {
            // Atualiza o nome do usuário
            if (nome !== user.displayName) {
                await updateProfile(user, { displayName: nome });
            }

            // Atualiza o email do usuário
            if (email !== user.email) {
                await updateEmail(user, email);
            }

            // Atualiza a senha do usuário
            if (novaSenha && novaSenha === confirmarSenha) {
                if (senhaAtual) {
                    // Verifica a senha atual antes de atualizar (opcional)
                    const credencial = firebase.auth.EmailAuthProvider.credential(user.email, senhaAtual);
                    await user.reauthenticateWithCredential(credencial);
                }
                await updatePassword(user, novaSenha);
            }

            alert('Configurações atualizadas com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar configurações:', error);
            alert('Erro ao atualizar configurações. Tente novamente.');
        }
    } else {
        alert('Usuário não autenticado. Faça login novamente.');
        window.location.href = 'login.html';
    }
});

// Botão de sair
document.getElementById('btn-sair').addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Erro ao sair:', error);
    });
});