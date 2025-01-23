const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-senha');
const loginButton = document.getElementById('botao-entrar');
const erroEmail = "Digite um e-mail!";
const erroPassword = "Digite a senha!";

function login() {
    let email = inputEmail.value;
    let password = inputPassword.value;
    verificarCampos(email, password);
}

function verificarCampos(campo1, campo2) {
    const loginEfetuado = `Login efetuado com sucesso! Bem vindo ${campo1}`
    if (campo1 === '') {
        alert(erroEmail);
    } else if (campo2 === '') {
        alert(erroPassword);
    } else {
        alert(loginEfetuado);
        inputEmail.value = "";
        inputPassword.value = "";
    }
}
loginButton.addEventListener('click', login);