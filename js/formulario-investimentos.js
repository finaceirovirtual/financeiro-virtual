document.getElementById('form-investimentos').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os dados do formulário
    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const tipo = document.getElementById('tipo').value;

    // Salva no localStorage
    const investimento = { valor, descricao, data, tipo };
    let investimentos = JSON.parse(localStorage.getItem('investimentos')) || [];
    investimentos.push(investimento);
    localStorage.setItem('investimentos', JSON.stringify(investimentos));

    // Redireciona para o Dashboard
    window.location.href = 'dashboard.html';
});