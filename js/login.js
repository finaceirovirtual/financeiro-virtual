import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "firebase/auth";

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
        alert("Erro ao fazer login: " + error.message);
    }
});