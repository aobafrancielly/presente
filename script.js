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
  resposta.classList.toggle('hidden');
  botao.textContent = resposta.classList.contains('hidden') ? 'Mostrar resposta' : 'Esconder resposta';
}

// Expondo a função globalmente
window.mostrarResposta = mostrarResposta;


//Para abrir a foto etc

function abrirFoto(el) {
  const img = el.querySelector('img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function fecharLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
