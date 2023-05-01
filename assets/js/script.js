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

function initSlider() {
  const testimonialsSlider = document.querySelector(".testimonials-slider");

  const flkty = new Flickity(testimonialsSlider, {
    cellAlign: "center",
    contain: true,
    groupCells: "80%",
    autoPlay: 2500,
  });
}

initMenu();
initSlider();
