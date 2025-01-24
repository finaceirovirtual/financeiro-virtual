// Scripts comuns (exemplo: menu de usuário)
document.getElementById('user-icon').addEventListener('click', function(event) {
    event.stopPropagation();
    const menuContent = document.getElementById('menu-content');
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const menuContent = document.getElementById('menu-content');
    const userIcon = document.getElementById('user-icon');
    if (event.target !== userIcon && !userIcon.contains(event.target)) {
        menuContent.style.display = 'none';
    }
});

// Script para o botão "Sair"
document.getElementById('btn-sair').addEventListener('click', function() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html';
});