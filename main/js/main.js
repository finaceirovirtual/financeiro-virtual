import { auth, onAuthStateChanged } from './firebase.js';

// Verifica o estado de autenticação do usuário
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Usuário logado:', user);
        // Redireciona para o dashboard se o usuário estiver logado
        if (window.location.pathname !== '/dashboard.html') {
            window.location.href = 'dashboard.html';
        }
    } else {
        console.log('Nenhum usuário logado.');
        // Redireciona para a página de login se o usuário não estiver logado
        if (window.location.pathname !== '/index.html') {
            window.location.href = 'index.html';
        }
    }
});

// Função para redirecionar para o dashboard
function redirectToDashboard() {
    window.location.href = 'dashboard.html';
}

// Função para redirecionar para a página de login
function redirectToLogin() {
    window.location.href = 'index.html';
}

// Exporta funções para uso em outros arquivos
export { redirectToDashboard, redirectToLogin };