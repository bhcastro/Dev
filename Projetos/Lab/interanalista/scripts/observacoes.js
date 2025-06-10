let arrayObsHemato = [];
let arrayObsUrina = [];
const botaoAdicionarHemato = document.getElementById("add-obs-hemato");
const botaoAdicionarUrina = document.getElementById("add-obs-urina");

function pegarObsHemato(){
  let inputObsHemato = document.getElementById('input-obs-hemato');
  let obsHemato = inputObsHemato.value.trim();
  arrayObsHemato.push(obsHemato);
  let listaHemato = document.getElementById("lista-obs-hemato");
  let novaObs = document.createElement('li');
  novaObs.textContent = obsHemato;
  listaHemato.appendChild(novaObs);
  inputObsHemato.value = "";
  inputObsHemato.focus();
}

function pegarObsUrina(){
  let inputObsUrina = document.getElementById('input-obs-urina');
  let obsUrina = inputObsUrina.value.trim();
  arrayObsUrina.push(obsUrina);
  let listaUrina = document.getElementById('lista-obs-urina');
  let novaObs = document.createElement('li');
  novaObs.textContent = obsUrina;
  listaUrina.appendChild(novaObs);
  //atualizarListas(listaUrina, arrayObsUrina);
  inputObsUrina.value = "";
  inputObsUrina.focus();
}



function atualizarListas(setor, array){
  setor.textContent = "";
  let i = 0;
  for (i; i<array.length; i++){
    let novaObs = document.createElement("li");
    novaObs.innerHTML = array[i];
    setor.appendChild(novaObs);
  }
}

function removerObs(i, setor, array){
  array.splice(i, 1);
  atualizarListas(setor, array);  
}

botaoAdicionarHemato.addEventListener("click", pegarObsHemato);
botaoAdicionarUrina.addEventListener("click", pegarObsUrina);