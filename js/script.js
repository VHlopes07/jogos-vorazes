const box = document.querySelector(".con");
const imagens = document.querySelectorAll(".con img");

let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(${-contador * 209}vh)`;
}

setInterval(slider, 2000);