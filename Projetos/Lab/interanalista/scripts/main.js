const botaoRealizar = document.getElementById('botao-realizar');
const botaoFinalizar = document.getElementById('botao-finalizar');

function iniciar(){
    const dadosAnalista = document.querySelector('nav');
    const conteudoPrincipal = document.querySelector('main');

    let analista = prompt ('Digite seu nome:');
    let unidade = prompt ('Digite sua unidade:');

    document.getElementById('nome').value = analista;
    document.getElementById('unidade').value = unidade;

    let data = new Date();
    let dia = data.getDate();
    dia = dia <10? `0${dia}` : dia;

    let mes =data.getMonth();
    mes = mes++ <10? `0${mes}` : mes++;
    
    let ano = data.getFullYear();
    let dataRealizacao = `${dia}/${mes}/${ano}`;
    document.getElementById('data').value = dataRealizacao;

    dadosAnalista.classList.remove('ocultar');
    botaoRealizar.classList.add('ocultar');
    conteudoPrincipal.classList.remove('ocultar');
}
botaoRealizar.addEventListener('click', iniciar);
botaoFinalizar.addEventListener('click', function() {
  window.print();
});
