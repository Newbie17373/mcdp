// play video function

function playVideo(videoId) {
  const playerContainer = document.getElementById("player");
  clearResults();
  // Остальной код остается без изменений
  const playerHtml = `
  <iframe id="youtubePlayer" class="youtube__player-item" src="https://www.youtube.com/embed/${videoId}?autoplay=1" &mute=1 allow='autoplay' frameborder="0" allowfullscreen></iframe>
  <a class="youtube__button header__button" href="https://www.youtubezz.com/watch?v=${videoId}" target="_blank">Download (.mp3 320kbps|| edit & cut .mp3)</a>
  `;

  playerContainer.innerHTML = playerHtml;

  // Добавим событие 'onload' для iframe, чтобы начать воспроизведение после полной загрузки
  const youtubePlayer = document.getElementById("youtubePlayer");
  youtubePlayer.onload = function () {};

  // setTimeout(() => {
  //   var clickEvent = new PointerEvent("pointerdown", {
  //     view: window,
  //     bubbles: true,
  //     cancelable: true,
  //     button: 0, // Левая кнопка мыши
  //     pointerType: "mouse", // Тип указателя (мыши)
  //     pressure: 0.5, // Давление на кнопку (если применимо)
  //   });
  //   document
  //     .querySelector("ytp-large-play-button-red-bg")
  //     .dispatchEvent(clickEvent);
  // }, 3000);
}

// clear search results function
function clearResults() {
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";
  // searchResultsContainer.classList.toggle("hidden");
}
