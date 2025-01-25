// Seleciona os elementos do DOM
const userIcon = document.getElementById('user-icon');
const menuContent = document.getElementById('menu-content');

// Verifica se os elementos existem antes de adicionar os event listeners
if (userIcon && menuContent) {
    // Abre/fecha o menu ao clicar no ícone do usuário
    userIcon.addEventListener('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        } else {
            menuContent.style.display = 'block';
        }
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        if (event.target !== userIcon && !userIcon.contains(event.target)) {
            menuContent.style.display = 'none';
        }
    });
}

// Seleciona o botão de sair
const btnSair = document.getElementById('btn-sair');

// Verifica se o botão de sair existe antes de adicionar o event listener
if (btnSair) {
    btnSair.addEventListener('click', function () {
        localStorage.removeItem('usuarioLogado'); // Remove o usuário logado do localStorage
        window.location.href = 'login.html'; // Redireciona para a página de login
    });
}