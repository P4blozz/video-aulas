// SCIPT WHATSAPP

    // Função para enviar mensagem pelo WhatsApp
    function sendMessage(productId) {
        let message = '';
        if (productId === 'produto1') {
          message = 'Gostaria de comprar a Camiseta Chronic 4013';
        } else if (productId === 'produto2') {
          message = 'Gostaria de comprar a Camiseta Chronic 4013';
        }
        const url = `https://wa.me/5531985079718?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }

    // CARROUSEL
    let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Atualiza o índice do slide atual
    currentIndex += direction;

    // Loop infinito para o carrossel
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Move o carrossel
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// FAVORITOS

// Função para alternar o coração (vazio/cheio) e adicionar/remover dos favoritos
function toggleFavorite(button) {
    const productId = button.closest('.card').getAttribute('data-product-id'); // Obtém o ID do produto (pode ser qualquer identificador único)
    const heartImage = button.querySelector('img');
    
    // Checa se o produto já está nos favoritos
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    if (favorites.includes(productId)) {
      // Remove dos favoritos
      favorites = favorites.filter(id => id !== productId);
      heartImage.src = 'imagens/vazio.png'; // Muda para coração vazio
    } else {
      // Adiciona aos favoritos
      favorites.push(productId);
      heartImage.src = 'imagens/cheio.png'; // Muda para coração cheio
    }
  
    // Salva a lista atualizada de favoritos no localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  // Função para exibir os favoritos na página de favoritos
  function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Para cada produto na lista de favoritos, altere o estado do ícone do coração
    const favoriteButtons = document.querySelectorAll('.btn.favorite-btn'); // Todos os botões de favoritos
    favoriteButtons.forEach(button => {
      const productId = button.closest('.card').getAttribute('data-product-id'); // ID do produto
      const heartImage = button.querySelector('img');
      
      if (favorites.includes(productId)) {
        heartImage.src = 'imagens/coracao-cheio.png'; // Coração cheio se o produto estiver nos favoritos
      } else {
        heartImage.src = 'imagens/coracao-vazio.png'; // Coração vazio se não estiver nos favoritos
      }
    });
  }
  
  // Chama a função para carregar os favoritos ao carregar a página
  document.addEventListener('DOMContentLoaded', loadFavorites);