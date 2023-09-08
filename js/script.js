document.addEventListener('DOMContentLoaded', () => {
    var btnSenha = document.getElementById('compararSenha');
    
    btnSenha.addEventListener('click', (e) => {
        e.preventDefault();
        redirecionarIndex();
    })
})

function redirecionarIndex() {
    var senha1 = document.getElementById('newpassword').value;
    var senha2 = document.getElementById('newpassword1').value;
    
    if(senha1 === senha2 ) {
        window.location.href = 'login.html';
    } else {
        alert("As senhas não coincidem!");
    }
}