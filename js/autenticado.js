function autenticado() {
    var authenticated = localStorage.getItem('authenticated');
    var usernameLS = localStorage.getItem('username');
    var greetings = document.getElementById('userGreetings');

    if (authenticated) {
        greetings.innerText = `Bem-vindo ${usernameLS}`;
    } else {
        location.href = 'login.html';
    }
}

function autenticado1() {
    var authenticated = localStorage.getItem('authenticated');

    if (!authenticated) {
        location.href = 'login.html';
    }
}
