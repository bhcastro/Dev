const listaObsUrina = document.getElementById('lista-obs-urina');
const botaoAdicionarUrina = document.getElementById('botao-add-obs-urina');
let inputObsUrina = document.getElementById('input-obs-urina');

const botaoAdicionarHemato = document.getElementById('botao-add-obs-hemato');
let inputObsHemato = document.getElementById('input-obs-hemato');

const valorInvalido = 'Não é possível inserir observções em branco.';
const valorRepetido = 'Observação já inserida';

let arrayObsHemato = [];
let arrayObsUrina = [];

function pegarValor(array, input){
  let novaObs = input.value.trim();
  if(novaObs === ""){
    alert(valorInvalido);
    input.focus();
  }else if(array.includes(novaObs)){
    alert(valorRepetido);
    input.value = "";
    input.focus();
  }else{
    array.push(novaObs);
    alert(array, novaObs);
    input.value = "";
    input.focus();
    mostrarObs(array, i)
  }
}

function mostrarObs(array, lista, i){
  array.innerHTML = "";
  for(i = 0; i <array.length; i++){
    let novaObs = document.createElement('li');
    let botaoEditar = document.createElement('button');
    let botaoRemover = document.createElement('button');

    novaObs.textContent = i;
    botaoEditar.textContent = 'Editar';
    botaoRemover.textContent = 'Remover';

    novaObs.appendChild(botaoEditar);
    novaObs.appendChild(botaoRemover);
    lista.appendChild(novaObs);


  }
}

botaoAdicionarUrina.addEventListener('click', ()=> pegarValor(arrayObsUrina, inputObsUrina));
botaoAdicionarHemato.addEventListener('click', ()=> pegarValor(arrayObsHemato, inputObsHemato));