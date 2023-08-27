document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        autenticar();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('nextPageBot');
    
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        autenticar1();
    });
});

function autenticar() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = ['angeloartur', 'joao1', 'maria1', 'marcos1', 'joana1'];

    if (users.includes(username) && password === 'senha123') {
        localStorage.setItem('username', username);
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'paginaInicial.html';
    } else {
        alert('Informações inválidas, tente novamente');
    }
}

function autenticar1() {
    var userCredential = document.getElementById('userCR').value;
    var passwordCredential = document.getElementById('senhaCR').value;

    var users = ['angeloartur', 'joao1', 'maria1', 'marcos1', 'joana1'];

    if (users.includes(userCredential) && passwordCredential === 'senha123') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'execucaoBot2.html';
    } else {
        alert('Informações inválidas, tente novamente');
    }
}
