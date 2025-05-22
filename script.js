// Quando o botão "começar" for clicado, mostrar o conteúdo principal
document.getElementById('startButton').addEventListener('click', function () {
  const conteudo = document.getElementById('conteudo');
  conteudo.classList.remove('hidden');
  conteudo.classList.add('fade-in');
  this.style.display = 'none'; // Esconde o botão depois do clique
});

// Função para mostrar a resposta no quiz
function mostrarResposta(botao) {
  const resposta = botao.nextElementSibling;
  resposta.classList.remove('hidden');
  resposta.classList.add('fade-in');
}

// Expondo a função globalmente
window.mostrarResposta = mostrarResposta;

