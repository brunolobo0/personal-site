// Função para criar partículas animadas de fundo
function criarParticulas() {
  const containerParticulas = document.getElementById("particulas");
  const quantidadeParticulas = 30;

  for (let i = 0; i < quantidadeParticulas; i++) {
    const particula = document.createElement("div");
    particula.classList.add("particula");

    // Tamanho e posição aleatórios
    const tamanho = Math.random() * 3 + 1;
    particula.style.width = tamanho + "px";
    particula.style.height = tamanho + "px";
    particula.style.left = Math.random() * 100 + "%";
    particula.style.animationDelay = Math.random() * 25 + "s";
    particula.style.animationDuration = Math.random() * 15 + 20 + "s";

    containerParticulas.appendChild(particula);
  }
}

// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((ancora) => {
  ancora.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    if (alvo) {
      alvo.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animação de aparição no scroll
const opcesObservador = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
    }
  });
}, opcesObservador);

document.querySelectorAll(".aparecer-scroll").forEach((el) => {
  observador.observe(el);
});

// Mudança do fundo do cabeçalho no scroll
window.addEventListener("scroll", () => {
  const cabecalho = document.querySelector(".cabecalho");
  if (window.scrollY > 100) {
    cabecalho.style.background = "rgba(10, 10, 10, 0.98)";
  } else {
    cabecalho.style.background = "rgba(15, 15, 15, 0.95)";
  }
});

// Inicializar partículas quando a página carregar
window.addEventListener("load", criarParticulas);

// Efeito de digitação para o subtítulo (opcional)
function efeitoDigitacao(elemento, texto, velocidade = 80) {
  let i = 0;
  elemento.innerHTML = "";
  function digitar() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, velocidade);
    }
  }
  digitar();
}

// Inicializar efeito de digitação
window.addEventListener("load", () => {
  const subtitulo = document.querySelector(".secao-hero .subtitulo");
  const textoOriginal = subtitulo.textContent;
  setTimeout(() => {
    efeitoDigitacao(subtitulo, textoOriginal, 120);
  }, 1500);
});
