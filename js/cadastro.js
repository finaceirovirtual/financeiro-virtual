import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
} from './firebase.js'; // Caminho relativo

document.getElementById('form-cadastro').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Captura os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmarSenha = document.getElementById('confirmar-senha').value.trim();

  // Limpa mensagens de erro anteriores
  limparErros();

  // Validações
  let valido = true;

  if (nome === "") {
    exibirErro("erro-nome", "O nome é obrigatório.");
    valido = false;
  }

  if (!validarEmail(email)) {
    exibirErro("erro-email", "Por favor, insira um email válido.");
    valido = false;
  }

  if (!validarForcaSenha(senha)) {
    exibirErro("erro-senha", "A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e símbolos.");
    valido = false;
  }

  if (senha !== confirmarSenha) {
    exibirErro("erro-confirmar-senha", "As senhas não coincidem.");
    valido = false;
  }

  // Se todas as validações passarem, prossegue com o cadastro
  if (valido) {
    criarUsuario(nome, email, senha);
  }
});

// Função para validar o formato do email
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Função para validar a força da senha
function validarForcaSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(senha);
}

// Função para exibir mensagens de erro
function exibirErro(id, mensagem) {
  const elementoErro = document.getElementById(id);
  elementoErro.textContent = mensagem;
  elementoErro.style.color = "red";
}

// Função para limpar mensagens de erro
function limparErros() {
  const erros = document.querySelectorAll('.erro');
  erros.forEach(erro => {
    erro.textContent = "";
  });
}

// Função para criar usuário no Firebase
function criarUsuario(nome, email, senha) {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuário cadastrado:', user);
      return updateProfile(user, { displayName: nome });
    })
    .then(() => {
      // Salva os dados do usuário no Firestore
      salvarUsuarioNoFirestore(auth.currentUser.uid, nome, email);
      exibirMensagemSucesso('Cadastro realizado com sucesso!');
      window.location.href = 'dashboard.html'; // Redireciona para o dashboard
    })
    .catch((error) => {
      console.error('Erro no cadastro:', error.message);
      exibirErro("erro-geral", 'Erro ao cadastrar: ' + error.message);
    });
}

// Função para salvar usuário no Firestore
async function salvarUsuarioNoFirestore(uid, nome, email) {
  try {
    const userRef = doc(firestore, "usuarios", uid); // Cria uma referência para o documento do usuário
    await setDoc(userRef, {
      nome: nome,
      email: email,
      dataCadastro: new Date().toISOString()
    });
    console.log("Usuário salvo no Firestore com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar usuário no Firestore:", error);
  }
}

// Função para exibir mensagem de sucesso
function exibirMensagemSucesso(mensagem) {
  const mensagemSucesso = document.createElement('div');
  mensagemSucesso.classList.add('mensagem-sucesso');
  mensagemSucesso.textContent = mensagem;
  document.querySelector('.formulario-cadastro').appendChild(mensagemSucesso);

  // Remove a mensagem após 5 segundos
  setTimeout(() => {
    mensagemSucesso.remove();
  }, 5000);
}

// Cadastro com Google
document.getElementById('google-login').addEventListener('click', function () {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Usuário cadastrado/logado com Google:', user);
      // Salva os dados do usuário no Firestore
      salvarUsuarioNoFirestore(user.uid, user.displayName, user.email);
      alert('Cadastro com Google realizado com sucesso!');
      window.location.href = 'dashboard.html'; // Redireciona para o dashboard
    })
    .catch((error) => {
      console.error('Erro no cadastro com Google:', error.message);
      alert('Erro ao cadastrar com Google: ' + error.message);
    });
});