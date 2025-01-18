import { auth, createUserWithEmailAndPassword, updateProfile } from './firebase.js';

document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    // Validação simples
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    // Cadastra o usuário no Firebase
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Sucesso
            const user = userCredential.user;
            console.log('Usuário cadastrado:', user);

            // Adiciona o nome do usuário ao perfil (opcional)
            return updateProfile(user, {
                displayName: nome
            });
        })
        .then(() => {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html'; // Redireciona para a página de login
        })
        .catch((error) => {
            // Trata erros
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Erro no cadastro:', errorMessage);

            if (errorCode === 'auth/email-already-in-use') {
                alert('Este email já está em uso!');
            } else {
                alert('Erro ao cadastrar: ' + errorMessage);
            }
        });
});