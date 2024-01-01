function checkEnter(event) {
  if (event.key === "Enter") {
    document.getElementById("myButton").click();
    searchYouTubeMusic();
  }
}
