// Função para simular o envio de um e-mail de recuperação de senha
document.getElementById('form-recuperar-senha').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura o e-mail digitado
    const email = document.getElementById('email').value;

    // Simula o envio de um e-mail de recuperação
    setTimeout(() => {
        // Exibe uma mensagem de sucesso
        const mensagemSucesso = document.createElement('div');
        mensagemSucesso.classList.add('mensagem-sucesso');
        mensagemSucesso.textContent = `Um e-mail de recuperação foi enviado para ${email}. Verifique sua caixa de entrada.`;

        // Adiciona a mensagem ao formulário
        const form = document.getElementById('form-recuperar-senha');
        form.appendChild(mensagemSucesso);

        // Limpa o campo de e-mail
        document.getElementById('email').value = '';

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            mensagemSucesso.remove();
        }, 5000);
    }, 1000); // Simula um atraso de 1 segundo para o envio do e-mail
});