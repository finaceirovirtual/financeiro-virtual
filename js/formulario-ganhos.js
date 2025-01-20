document.getElementById('form-ganhos').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os dados do formulário
    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    // Salva no localStorage
    const ganho = { valor, descricao, data, categoria };
    let ganhos = JSON.parse(localStorage.getItem('ganhos')) || [];
    ganhos.push(ganho);
    localStorage.setItem('ganhos', JSON.stringify(ganhos));

    // Redireciona para o Dashboard
    window.location.href = 'dashboard.html';
});