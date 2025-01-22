// Importações do Firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

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
const auth = getAuth(app); // Declaração única da variável `auth`

// Restante do código...
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

// Login com Google
document.getElementById('google-login').addEventListener('click', function () {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // Login bem-sucedido
      const user = result.user;
      console.log('Usuário logado com Google:', user);
      alert('Login com Google realizado com sucesso!');
      window.location.href = 'dashboard.html'; // Redireciona para o dashboard
    })
    .catch((error) => {
      // Trata erros
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro no login com Google:', errorMessage);
      alert('Erro ao fazer login com Google: ' + errorMessage);
    });
});