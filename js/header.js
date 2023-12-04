window.onscroll = function() {
    var header = document.querySelector(".header");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var headerTop = header.offsetTop;

    if (scrollTop > headerTop) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100%";
        header.style.zIndex = "9999"; // Certifique-se de definir um alto valor de z-index
        header.style.opacity = "0.95";
    } else {
        header.style.position = "static";
        header.style.zIndex = "auto"; // Volte o valor de z-index ao padrão
    }
};