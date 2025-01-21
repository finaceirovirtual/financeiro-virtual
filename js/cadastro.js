import { 
    auth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    GoogleAuthProvider, 
    signInWithPopup 
} from './firebase.js';

// Cadastro com email e senha
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
            // Usuário cadastrado com sucesso
            const user = userCredential.user;
            console.log('Usuário cadastrado:', user);

            // Adiciona o nome do usuário ao perfil (opcional)
            return updateProfile(user, {
                displayName: nome
            });
        })
        .then(() => {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'dashboard.html'; // Redireciona para o dashboard
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

// Cadastro com Google
document.getElementById('google-login').addEventListener('click', function () {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // Cadastro/login bem-sucedido
            const user = result.user;
            console.log('Usuário cadastrado/logado com Google:', user);
            alert('Cadastro com Google realizado com sucesso!');
            window.location.href = 'dashboard.html'; // Redireciona para o dashboard
        })
        .catch((error) => {
            // Trata erros
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Erro no cadastro com Google:', errorMessage);
            alert('Erro ao cadastrar com Google: ' + errorMessage);
        });
});