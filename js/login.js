// Importe os módulos do Firebase via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Adiciona o evento de submit ao formulário de login
document.getElementById('form-login').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    try {
        // Autentica o usuário
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        alert("Login realizado com sucesso!");
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
    } catch (error) {
        console.error("Erro no login:", error.message);

        // Tratamento de erros específicos
        switch (error.code) {
            case "auth/invalid-email":
                alert("O email fornecido é inválido.");
                break;
            case "auth/user-not-found":
                alert("Usuário não encontrado.");
                break;
            case "auth/wrong-password":
                alert("Senha incorreta.");
                break;
            case "auth/too-many-requests":
                alert("Muitas tentativas de login. Tente novamente mais tarde.");
                break;
            default:
                alert("Erro ao fazer login: " + error.message);
        }
    }
});