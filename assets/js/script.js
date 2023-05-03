function initMenu() {
  const buttonMenu = document.querySelector(".btn-mobile");
  const links = document.querySelectorAll("nav ul li a");

  function toggleMenu() {
    const nav = document.querySelector("header nav");
    nav.classList.toggle("active");
  }

  buttonMenu.addEventListener("click", toggleMenu);
  links.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
}

function initScrollReveal() {
  const elementsLeft = [
    "#hero .infos-container",
    "#how-it-works h2",
    "#how-it-works p",
    "#plans h2",
    ".testimonials-header",
    "#contact .texts",
  ];

  const elementsRight = [".hero-model img", "#contact .informations"];

  const elementsTop = [
    ".benefits-cards",
    ".plans-cards",
    ".testimonials-slider",
  ];

  function revealAtLeft(element) {
    ScrollReveal().reveal(element, {
      delay: 100,
      duration: 600,
      origin: "left",
      distance: "50px",
    });
  }

  function revealAtTop(element) {
    ScrollReveal().reveal(element, {
      delay: 100,
      duration: 600,
      origin: "top",
      distance: "50px",
    });
  }

  function revealAtRight(element) {
    ScrollReveal().reveal(element, {
      delay: 100,
      duration: 600,
      origin: "right",
      distance: "50px",
    });
  }

  elementsLeft.forEach((element) => revealAtLeft(element));
  elementsRight.forEach((element) => revealAtRight(element));
  elementsTop.forEach((element) => revealAtTop(element));
}

function initSlider() {
  const testimonialsSlider = document.querySelector(".testimonials-slider");

  const flkty = new Flickity(testimonialsSlider, {
    cellAlign: "center",
    contain: true,
    groupCells: "80%",
    autoPlay: 5000,
  });
}

initMenu();
initScrollReveal();
initSlider();
