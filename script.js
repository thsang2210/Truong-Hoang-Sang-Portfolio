// Fade-in animation when sections come into view
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2, // trigger when 20% of element is visible
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Accordion toggle for achievements
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;

    // Close other open accordions
    document.querySelectorAll('.accordion-body').forEach(item => {
      if (item !== body) {
        item.style.display = 'none';
      }
    });

    // Toggle current accordion
    if (body.style.display === 'block') {
      body.style.display = 'none';
    } else {
      body.style.display = 'block';
    }
  });
});
