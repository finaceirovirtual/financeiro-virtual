// Importe os módulos do Firebase via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, fetchSignInMethodsForEmail } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

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
const firestore = getFirestore(app);

// Adiciona o evento de submit ao formulário de cadastro
document.getElementById('form-cadastro').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmar-senha').value.trim();

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    try {
        // Verifica se o email já está em uso
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length > 0) {
            alert("Este email já está em uso. Por favor, use outro email ou faça login.");
            return;
        }

        // Cria o usuário no Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        // Atualiza o perfil do usuário com o nome
        await updateProfile(user, { displayName: nome });

        // Salva os dados do usuário no Firestore
        await setDoc(doc(firestore, "usuarios", user.uid), {
            nome: nome,
            email: email,
            dataCadastro: new Date().toISOString()
        });

        alert("Cadastro realizado com sucesso!");
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Erro no cadastro:", error.message);

        // Tratamento de erros específicos
        switch (error.code) {
            case "auth/email-already-in-use":
                alert("Este email já está em uso. Por favor, use outro email ou faça login.");
                break;
            case "auth/invalid-email":
                alert("O email fornecido é inválido.");
                break;
            case "auth/weak-password":
                alert("A senha é muito fraca. Use uma senha com pelo menos 6 caracteres.");
                break;
            default:
                alert("Erro ao cadastrar: " + error.message);
        }
    }
});