let inputNome = document.getElementById("cadastro-nome");
let inputSobrenome = document.getElementById("cadastro-sobrenome");
let inputEmail = document.getElementById("cadastro-email");
let inputPassword = document.getElementById("cadastro-senha");
const botaoFinalizarCadastro = document.getElementById("botao-cadastrar");
const nomeInvalido = "Insira um nome válido!";
const sobrenomeInvalido = "Insira um sobrenome válido!";
const emailInvalido = "Insira um e-mail!";
const senhaInvalida = "Cadastre uma senha!";
const cadastroEfetuado = "Cadastro efetuado com sucesso!";

function finalizarCadastro() {
    let nome = inputNome.value;
    let sobrenome = inputSobrenome.value;
    let email = inputEmail.value;
    let password = inputPassword.value;
    verificarDados(nome, sobrenome, email, password)
}
function verificarDados(campo1, campo2, campo3, campo4) {
    if (!isNaN(campo1) || campo1 === "") {
        alert(nomeInvalido);
    } else if (!isNaN(campo2) || campo2 === "") {
        alert(sobrenomeInvalido);
    } else if (campo3 === "") {
        alert(emailInvalido);
    } else if (campo4 === "") {
        alert(senhaInvalida);
    } else {
        alert(cadastroEfetuado);
        inputNome.value = "";
        inputSobrenome.value = "";
        inputEmail.value = "";
        inputPassword.value = "";
    }
}
botaoFinalizarCadastro.addEventListener("click", finalizarCadastro);
