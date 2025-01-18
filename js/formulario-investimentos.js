// Função para salvar o investimento e redirecionar para o Dashboard
document.getElementById('form-investimentos').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os dados do formulário
    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const tipo = document.getElementById('tipo').value;

    // Cria um objeto com os dados do investimento
    const investimento = {
        valor,
        descricao,
        data,
        tipo
    };

    // Salva o investimento no localStorage
    let investimentos = JSON.parse(localStorage.getItem('investimentos')) || [];
    investimentos.push(investimento);
    localStorage.setItem('investimentos', JSON.stringify(investimentos));

    // Redireciona para o Dashboard
    window.location.href = 'dashboard.html';
});