const arrow = document.querySelector(".tracklist__arrow");
const trackList = document.querySelector(".tracklist");
arrow.addEventListener("click", () => {
  arrow.classList.toggle("rotated");
  trackList.classList.toggle("active");
});
