// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Example of a simple JavaScript interaction
    console.log('Page loaded and JavaScript is running.');

    // Example: Change the background color of the content sections on click
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.style.backgroundColor = '#e0e0e0'; // Light gray background on click
        });
    });

    // Scroll event for footer visibility
    window.addEventListener('scroll', () => {
      const footer = document.querySelector('footer');
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentHeight = document.body.scrollHeight;

      if (scrollPosition + windowHeight >= contentHeight) {
        footer.classList.add('show');
      } else {
        footer.classList.remove('show');
      }
    });
});