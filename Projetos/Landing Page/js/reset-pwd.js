const inputEmail = document.getElementById("input-email");
const inputCodigo = document.getElementById("input-codigo");
const botaoGerarCodigo = document.getElementById("botao__gerar__codigo");
const botaoVerificar = document.getElementById("verificar");
const botaoGerarNovo = document.getElementById("gerar__novo");
const conteinerGerarCodigo = document.getElementById("gerar__codigo");
const conteinerVerificarCodigo = document.getElementById("verificar__codigo");
const spanReset = document.getElementById('span-reset-pwd');
const textoCodigo = "Insira o código recebido por e-mail."
const textoEmail = "Insira seu e-mail para receber um código de verificação.";
const codigoErrado = "O valor digitado não corresponde ao código enviado!";
const codigoCerto = "Senha alterada!";
const numeroVazio = "Insira o código recebido!"
const numeroInvalido = "O código enviado é composto apenas por números!"
let codigo = 0;
let verificador = 0;
inputEmail.focus();

function verificarCodigo() {
    verificador = inputCodigo.value;
    if (codigo === 0) {
        codigo = gerarCodigo();
    }else{
        if (verificador == 0) {
            alert(numeroVazio);
            inputCodigo.value = "";
            inputCodigo.focus();
        }else if(isNaN(verificador)){
            alert(numeroInvalido);
            inputCodigo.value = "";
            inputCodigo.focus();
        }else{
            if (verificador === codigo) {
                alert(codigoCerto);
                inputCodigo.value = "";
                inputCodigo.focus();
                codigo = 9999;
                window.location.href = "../html/login.html"
            }else{
                alert(codigoErrado);
                inputCodigo.value = "";
                inputCodigo.focus();
            }
        }
    }
}

function gerarCodigo() {
    conteinerGerarCodigo.classList.add('ocultar');
    conteinerVerificarCodigo.classList.remove('ocultar');
    let numero = Math.random() * 1000 + 1000;
    numero = numero.toFixed(0);
    console.log(numero);
    inputEmail.value = "";
    inputCodigo.focus();
    spanReset.innerHTML = textoCodigo;
    return numero;
}

function novoCodigo() {
    inputCodigo.value = "";
    codigo = 0;
    conteinerGerarCodigo.classList.remove('ocultar');
    conteinerVerificarCodigo.classList.add('ocultar');
    spanReset.innerHTML = textoEmail;
    inputEmail.value = "";
    inputCodigo.value = "";
    inputEmail.focus();
}

botaoGerarCodigo.addEventListener("click", verificarCodigo);
botaoGerarNovo.addEventListener("click", novoCodigo);
botaoVerificar.addEventListener("click", verificarCodigo);
