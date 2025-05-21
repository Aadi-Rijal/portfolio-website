// Typed.js for typing effect
var typed = new Typed(".typed-text", {
  strings: ["Artificial Intelligence", "Cybersecurity"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Particles.js background config
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3
    }
  }
});


// Toggle light/dark mode
document.querySelector('.switch input').addEventListener('change', function () {
  document.body.classList.toggle('light-mode');
});
