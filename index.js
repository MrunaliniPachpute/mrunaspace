//FOR BANNER NAVBAR
const nav = document.querySelector("nav");
const highlight = nav.querySelector("span");
const links = nav.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const linkRect = link.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        const leftOffset = linkRect.left - navRect.left;
        const width = linkRect.width;

        highlight.style.left = `${leftOffset}px`;
        highlight.style.width = `${width}px`;
    });
});

// Optional: Reset on mouse leave (optional, keeps highlight on last hovered)
nav.addEventListener("mouseleave", () => {
    highlight.style.width = "0";
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// FOR H1 TYPING
const text = "Hello, I'm Mrunalini.";
const element = document.querySelector("h1");
let index = 0;

function type1() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type1, 130); // speed in ms
  }
}
type1();


let skillSection = document.querySelector(".skills");
const skillCards = document.querySelectorAll(".skill");

skillSection.addEventListener("mousemove", (e) => {
  const rect = skillSection.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  skillCards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cardX = cardRect.left + cardRect.width / 2 - rect.left;
    const cardY = cardRect.top + cardRect.height / 2 - rect.top;

    const dx = cardX - mouseX;
    const dy = cardY - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const force = Math.max(30 - distance / 5, 0); // Adjust push strength
    const angle = Math.atan2(dy, dx);

    const offsetX = Math.cos(angle) * force;
    const offsetY = Math.sin(angle) * force;

    card.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

skillSection.addEventListener("mouseleave", () => {
  skillCards.forEach(card => {
    card.style.transform = "translate(0, 0)";
  });
});

