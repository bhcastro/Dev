const listaObsHemato = [];
const obsUrina = [];
const botaoAdicionarTarefaHemato = document.getElementById("add-obs-hemato");
const botaoAdicionarTarefaUrina = document.getElementById("add-obs-urina");

function pegarObsHemato(){
  let inputObsHemato = document.getElementById('input-obs-hemato');
  let obsHemato = inputObsHemato.value.trim();
  listaObsHemato.push(obsHemato);
  console.log(listaObsHemato);
  let listaHemato = document.getElementById("lista-obs-hemato");
  inputObsHemato.value = "";
  inserirObs(obsHemato, listaHemato);
}

function pegarObsUrina(){
  let inputObsUrina = document.getElementById('input-obs-urina');
  let obsUrina = inputObsUrina.value.trim();
  let listaUrina = document.getElementById("lista-obs-urina");
  inputObsUrina.value = "";
  inserirObs(obsUrina, listaUrina);
}

function inserirObs(valorObs, lista) {
  let obs = valorObs;
  let novaObs = document.createElement("li");
  novaObs.textContent = obs;
  lista.appendChild(novaObs);
}

botaoAdicionarTarefaHemato.addEventListener("click", pegarObsHemato);
botaoAdicionarTarefaUrina.addEventListener("click", pegarObsUrina);
