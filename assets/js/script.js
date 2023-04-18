const testimonialsSlider = document.querySelector(".testimonials-slider");

const flkty = new Flickity(testimonialsSlider, {
  cellAlign: "center",
  contain: true,
  groupCells: "80%",
  autoPlay: 2500,
});
