// SCIPT WHATSAPP

    // Função para enviar mensagem pelo WhatsApp
    function sendMessage() {
        const size = "G"; // Tamanho fixo
        const message = `Olá! Gostaria de comprar a Camiseta Chronic 4013 no tamanho ${size}.`;
        const whatsappUrl = `https://wa.me/5599999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }