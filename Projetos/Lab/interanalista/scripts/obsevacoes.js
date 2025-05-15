const listaObsHemato = [];
const obsUrina = [];
const botaoAdicionarTarefaHemato = document.getElementById('add-obs-hemato');

function inserirObsHemato() {
    let inputTarefaHemato = document.getElementById('input-obs-hemato');
    let obsHemato = inputTarefaHemato.value.trim();
    listaObsHemato.push(obsHemato);
    console.log(listaObsHemato);
    
    let listaHemato = document.getElementById('lista-obs-hemato');
    let novaObs = document.createElement('li');
    novaObs.textContent = obsHemato;
    listaHemato.appendChild(novaObs);
    inputTarefaHemato.value = ""
}

botaoAdicionarTarefaHemato.addEventListener('click', inserirObsHemato);