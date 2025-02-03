const inputPlantoes = document.getElementById('input__plantoes');
const inputFaltas = document.getElementById('input__faltas');
const inputAtrasos = document.getElementById('input__atrasos');
const outputAssiduidade = document.getElementById('output__assiduidade');
const buttonCalcularAssid = document.getElementById('botao__calc__assid');
const buttonZerarCampos = document.getElementById('botao__limpar__campos')
const paragrafoAssiduidade = document.getElementById('paragrafo__assiduidade');
const diasZerado = 'Insira um valor válido para os dias trabalhados!';
const diasNegativo = 'Não é permitido inserir números negativos';


function calcularAssiduidade(){
    let diasTrabalhados = parseInt(inputPlantoes.value);
    let faltasNaoJustificadas = parseInt(inputFaltas.value) || 0;
    let atrasos = parseInt(inputAtrasos.value) || 0;
    if(!isNaN(diasTrabalhados) && diasTrabalhados >= 0 && faltasNaoJustificadas >= 0 && faltasNaoJustificadas >= 0 && !isNaN(atrasos) && atrasos >= 0){
    faltasNaoJustificadas = faltasNaoJustificadas*2;
    atrasos = atrasos + faltasNaoJustificadas;
    let totalAtrasos = (atrasos/diasTrabalhados)*100;
    let totalAssiduidade = 100 - totalAtrasos;
    totalAssiduidade = totalAssiduidade.toFixed(2); 
    outputAssiduidade.innerText = `${totalAssiduidade}%`;
    paragrafoAssiduidade.classList.remove('ocultar');
    buttonZerarCampos.classList.remove('ocultar');
    }else if(diasTrabalhados < 0 || atrasos < 0 || faltasNaoJustificadas < 0){
    alert(diasNegativo);
    }else{
        alert(diasZerado);
    }
}

function limparCampos(){
    inputPlantoes.value = "";
    inputFaltas.value = "";
    inputAtrasos.value = "";
    outputAssiduidade.innerText = "";
    paragrafoAssiduidade.classList.toggle('ocultar');
    buttonZerarCampos.classList.toggle('ocultar');
}

buttonZerarCampos.addEventListener('click', limparCampos)
buttonCalcularAssid.addEventListener('click', calcularAssiduidade);
