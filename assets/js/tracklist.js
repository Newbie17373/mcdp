const arrows = document.querySelectorAll(".tracklist__arrow");
const trackList = document.querySelector(".tracklist");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrows[0].classList.toggle("rotated"),
      arrows[1].classList.toggle("rotated");
    trackList.classList.toggle("active");
    body.classList.toggle("scroll-lock");
  });
});
