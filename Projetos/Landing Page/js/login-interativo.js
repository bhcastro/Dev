const botaoLogin = document.getElementById("button-login");
botaoSignin = document.getElementById("button-signin");
const sectionLogin = document.getElementById("login");
const sectionSignin = document.getElementById("sign-in");

function login() {
    sectionLogin.classList.add("login-ativo");
    sectionLogin.classList.remove("inativo");
    sectionSignin.classList.add("inativo");
}
function signin() {
    sectionSignin.classList.add("signin-ativo");
    sectionSignin.classList.remove("inativo");
    sectionLogin.classList.add("inativo");
}

botaoLogin.addEventListener("click", login);
botaoSignin.addEventListener("click", signin);
