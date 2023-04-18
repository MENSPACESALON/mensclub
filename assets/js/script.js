const testimonialsSlider = document.querySelector(".testimonials-slider");

const flkty = new Flickity(testimonialsSlider, {
  cellAlign: "left",
  contain: true,
  groupCells: "80%",
  wrapAround: true,
  autoPlay: true,
});
