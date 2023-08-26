document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do botão
        autenticar();
    });
});

function autenticar() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'angeloartur' && password === 'senha123') {
        localStorage.setItem('username', username);
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'paginaInicial.html';
    } else {
        alert('Informações inválidas, tente novamente');
    }
}
