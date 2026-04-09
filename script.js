// Fade-in animation
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Accordion
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
