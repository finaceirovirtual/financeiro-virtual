import { auth, signInWithEmailAndPassword } from './firebase.js';

document.getElementById('form-login').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Faz o login com Firebase
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Login bem-sucedido
            const user = userCredential.user;
            console.log('Usuário logado:', user);
            alert('Login realizado com sucesso!');
            window.location.href = 'dashboard.html'; // Redireciona para o dashboard
        })
        .catch((error) => {
            // Trata erros
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Erro no login:', errorMessage);

            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                alert('Email ou senha incorretos!');
            } else {
                alert('Erro ao fazer login: ' + errorMessage);
            }
        });
});