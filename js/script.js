/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".medsos, .nav, .banner", {
  origin: "top",
});

ScrollReveal().reveal(".container small, .container img", {
  origin: "bottom",
});

ScrollReveal().reveal(".about h3, .box, .label p,", {
  origin: "left",
});

ScrollReveal().reveal(".about p, .service h3,", {
  origin: "right",
});
