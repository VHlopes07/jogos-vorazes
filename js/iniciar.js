function redirectToDiv() {
    // Obtém o elemento com a classe 'games'
    var divElement = document.querySelector('.games');

    // Verifica se o elemento foi encontrado
    if (divElement) {
        // Rola a página para a posição do elemento
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
}