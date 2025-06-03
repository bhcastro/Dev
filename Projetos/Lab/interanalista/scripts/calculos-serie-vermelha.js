//Calculadora automatica das plaquetas

const inputPlaquetasContadas = document.getElementById('plaquetas-contadas');
const inputValorRbc = document.getElementById('valor-rbc');
const outputCalculoPlaquetas = document.getElementById('output-plaquetas');

function calcularPlaquetas(){
    let plaquetasContadas = parseFloat(inputPlaquetasContadas.value.trim());
    let valorRbc = parseFloat(inputValorRbc.value.trim());
    let plaquetasCalculadas = (plaquetasContadas * valorRbc).toFixed(0);
    if (!isNaN(plaquetasCalculadas)){
        outputCalculoPlaquetas.value = plaquetasCalculadas;
    }else{
        outputCalculoPlaquetas.value = 'Calculando...'
    }
}
inputValorRbc.addEventListener('input', calcularPlaquetas);

//Calculadora automatica dos reticulócitos

const inputReticulocitos = document.getElementById('input-reticulocitos');
const outputReticulocitos = document.getElementById('output-reticulocitos');

function calcularReticulocitos(){
    let reticulocitosContados = parseFloat(inputReticulocitos.value.trim());
    let reticulocitosCalculados = (reticulocitosContados / 10).toFixed(2);
    if (!isNaN(reticulocitosCalculados)){
        outputReticulocitos.value = reticulocitosCalculados;
    }else{
        outputReticulocitos.value = 'Calculando...'
    }
}
inputReticulocitos.addEventListener('input', calcularReticulocitos);
