document.addEventListener("DOMContentLoaded", function () {
  // Typed.js effect
  new Typed(".typed-text", {
    strings: ["Artificial Intelligence", "Cybersecurity"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Particles.js background
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

  // Theme toggle
  document.querySelector('.switch input').addEventListener('change', function () {
    document.body.classList.toggle('light-mode');
  });
});
