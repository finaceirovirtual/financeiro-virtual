// Função para salvar o ganho e redirecionar para o Dashboard
document.getElementById('form-ganhos').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os dados do formulário
    const valor = parseFloat(document.getElementById('valor').value);
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    // Cria um objeto com os dados do ganho
    const ganho = {
        valor,
        descricao,
        data,
        categoria
    };

    // Salva o ganho no localStorage
    let ganhos = JSON.parse(localStorage.getItem('ganhos')) || [];
    ganhos.push(ganho);
    localStorage.setItem('ganhos', JSON.stringify(ganhos));

    // Redireciona para o Dashboard
    window.location.href = 'dashboard.html';
});