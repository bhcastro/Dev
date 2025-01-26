const botaoEnviarMensagem = document.getElementById('submit-button');
const mensagemFinal = "Sua mensagem foi enviada, agora é só aguardar o nosso contato. Obrigado!"

function recarregar(){
  alert(mensagemFinal);
  window.location.href = "../html/index.html"
}

botaoEnviarMensagem.addEventListener('click', recarregar);
