const botaoRealizar = document.getElementById('botao-realizar');
const campoObrigatorio = "Este campo deve ser preenchido!";
let inputRbc = document.getElementById('input-rbc');

function iniciar(){
    const dadosAnalista = document.querySelector('nav');
    const conteudoPrincipal = document.querySelector('#conteudo_principal');

    let analista = prompt ('Digite seu nome:');
    let matricula = prompt ('Digite seu ID:');
    let filial = prompt ('Digite sua unidade:');

    document.getElementById('id').value = matricula;
    document.getElementById('nome').value = analista;
    document.getElementById('unidade').value = filial;

    let data = new Date();
    let dia = data.getDate();
    dia = dia <10? "0" + dia : dia;

    let mes =data.getMonth();
    mes = mes++ <10? "0" + mes : mes++;
    
    let ano = data.getFullYear();
    let dataRealizacao = dia + '/' + mes + '/' + ano;
    document.getElementById('data').value = dataRealizacao;

    dadosAnalista.classList.remove('dados__analista');
    dadosAnalista.classList.add('mostrar__nav');
    botaoRealizar.classList.add('ocultar');
    conteudoPrincipal.classList.remove('ocultar');
}

function calcularPlaquetas(){
  const outputPlaquetas = document.getElementById('output-plaquetas');
  let inputPlaquetas = document.getElementById('input-plaquetas');
  let valorPlaquetas = Number.parseInt(inputPlaquetas.value.trim());
  let inputRbc = document.getElementById('input-rbc');
  let valorRbc= Number.parseFloat(inputRbc.value.trim());
  let totalPlaquetas = valorRbc * valorPlaquetas;
  outputPlaquetas.textContent = totalPlaquetas;
}

inputRbc.addEventListener("input", calcularPlaquetas);
botaoRealizar.addEventListener('click', iniciar);
