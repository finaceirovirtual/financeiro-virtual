document.getElementById('form-despesa').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os dados do formulário
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    // Salva no localStorage
    const despesa = { descricao, valor, data, categoria };
    let despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    despesas.push(despesa);
    localStorage.setItem('despesas', JSON.stringify(despesas));

    // Redireciona para o Dashboard
    window.location.href = 'dashboard.html';
});