// Animated particles background
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size and position
    const size = Math.random() * 4 + 1;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 15 + "s";

    particlesContainer.appendChild(particle);
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Fade in animation on scroll
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Header background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(10, 14, 26, 0.95)";
  } else {
    header.style.background = "rgba(10, 14, 26, 0.9)";
  }
});

// Initialize particles when page loads
window.addEventListener("load", createParticles);

// Typing effect for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect
window.addEventListener("load", () => {
  const subtitle = document.querySelector(".hero .subtitle");
  const originalText = subtitle.textContent;
  setTimeout(() => {
    typeWriter(subtitle, originalText, 100);
  }, 1000);
});
