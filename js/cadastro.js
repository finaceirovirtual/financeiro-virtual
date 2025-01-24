import { auth, firestore } from './firebase.js';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

document.getElementById('form-cadastro').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmar-senha').value.trim();

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        await updateProfile(user, { displayName: nome });

        await setDoc(doc(firestore, "usuarios", user.uid), {
            nome: nome,
            email: email,
            dataCadastro: new Date().toISOString()
        });

        alert("Cadastro realizado com sucesso!");
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Erro no cadastro:", error.message);
        alert("Erro ao cadastrar: " + error.message);
    }
});