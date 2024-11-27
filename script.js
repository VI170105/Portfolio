document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    if (nome && email) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
        document.getElementById('form-contato').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
