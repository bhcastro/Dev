
//Declarações:

const inputPlantoes = document.getElementById('input__plantoes');
const inputFolgas = document.getElementById('input__folgas')
const inputFaltas = document.getElementById('input__faltas');
const inputAtrasos = document.getElementById('input__atrasos');
const outputAssiduidade = document.getElementById('output__assiduidade');
const outputDiasValidos = document.getElementById('output__dias__validos')
const buttonCalcularAssid = document.getElementById('botao__calc__assid');
const buttonZerarCampos = document.getElementById('botao__limpar__campos')
const paragrafoAssiduidade = document.getElementById('paragrafo__assiduidade');
const paragrafoDiasValidos = document.getElementById('paragrafo__dias__validos');

//Mensagens:

const diasZerado = 'Insira um valor válido para os dias trabalhados!';
const diasNegativo = 'Não é permitido inserir números negativos';


function calcularAssiduidade(){
    let diasTrabalhados = parseInt(inputPlantoes.value);
    let folgas = parseInt(inputFolgas.value) || 0;
    let diasValidos = diasTrabalhados - folgas;
    let faltasNaoJustificadas = parseInt(inputFaltas.value) || 0;
    let atrasos = parseInt(inputAtrasos.value) || 0;
    if(!isNaN(diasTrabalhados) && diasTrabalhados >= 0 && !isNaN(faltasNaoJustificadas) && !isNaN(faltasNaoJustificadas) && !isNaN(atrasos)){
    faltasNaoJustificadas = faltasNaoJustificadas*2;
    atrasos = atrasos + faltasNaoJustificadas;
    let totalAtrasos = (atrasos/diasValidos)*100;
    let totalAssiduidade = 100 - totalAtrasos;
    totalAssiduidade < 0 ? totalAssiduidade = 0 : totalAssiduidade;
    totalAssiduidade = totalAssiduidade.toFixed(2); 
    outputAssiduidade.innerText = `${totalAssiduidade}%`;
    outputDiasValidos.innerText = `${diasValidos}`;
    paragrafoAssiduidade.classList.remove('ocultar');
    paragrafoDiasValidos.classlist.remove('ocultar');
    buttonZerarCampos.classList.remove('ocultar');
    }else if(diasTrabalhados < 0 || atrasos < 0 || faltasNaoJustificadas < 0){
    alert(diasNegativo);
    }else{
        alert(diasZerado);
    }
}

function limparCampos(){
    inputPlantoes.value = "";
    inputFolgas.value = "";
    inputFaltas.value = "";
    inputAtrasos.value = "";
    outputAssiduidade.innerText = "";
    paragrafoAssiduidade.classList.toggle('ocultar');
    buttonZerarCampos.classList.toggle('ocultar');
}

buttonZerarCampos.addEventListener('click', limparCampos)
buttonCalcularAssid.addEventListener('click', calcularAssiduidade);
