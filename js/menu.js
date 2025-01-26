// menu.js

// Função para abrir/fechar o menu de usuário
document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.getElementById('user-icon');
    const menuContent = document.getElementById('menu-content');

    if (userIcon && menuContent) {
        userIcon.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique se propague para o documento
            menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
        });

        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', function(event) {
            if (event.target !== userIcon && !userIcon.contains(event.target)) {
                menuContent.style.display = 'none';
            }
        });
    }

    // Botão de sair
    const btnSair = document.getElementById('btn-sair');
    if (btnSair) {
        btnSair.addEventListener('click', function() {
            auth.signOut().then(() => {
                window.location.href = 'login.html';
            }).catch((error) => {
                console.error('Erro ao sair:', error);
            });
        });
    }
});