document.getElementById('loginBtn').addEventListener('click', () => {
    var username = document.getElementById('username').value;
    console.log(username)
    localStorage.setItem('username', username);
    window.location.href = 'paginaInicial.html';
})

var usernameLS = localStorage.getItem('username');
var greetings = document.getElementById('userGreetings');

greetings.textContent = `Bem-vindo ${usernameLS}`
