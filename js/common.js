const userIcon = document.getElementById('user-icon');
const menuContent = document.getElementById('menu-content');

if (userIcon && menuContent) {
    userIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        } else {
            menuContent.style.display = 'block';
        }
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        if (event.target !== userIcon && !userIcon.contains(event.target)) {
            menuContent.style.display = 'none';
        }
    });
}

const btnSair = document.getElementById('btn-sair');
if (btnSair) {
    btnSair.addEventListener('click', function () {
        localStorage.removeItem('usuarioLogado');
        window.location.href = 'login.html';
    });
}