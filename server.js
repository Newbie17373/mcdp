const express = require("express");
const path = require("path");
const morgan = require("morgan");
const YoutubeMusicApi = require("youtube-music-api");

const app = express();
const api = new YoutubeMusicApi();
const apiKey = "AIzaSyBpmx7bN6MsnVtHMb2QDoPpSGLz2rUafks";
const apiUrl = "https://www.googleapis.com/youtube/v3/search";

app.set("view engine", "ejs");

const port = 3000;

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(port, (error) => {
  error ? console.log(error) : console.log(`listening port ${port}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

console.log(path.join(__dirname, "assets"));
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  const title = "index";
  const searchResponce = false;

  res.render(createPath("index"), { title, searchResponce });
});

app.get("/contacts", (req, res) => {
  const title = "contacts";
  res.render(createPath("index"), { title });
});

app.get("/index.html", (req, res) => {
  res.redirect("/");
});

app.use("/submit", (req, res, next) => {
  const searchQuery = req.query.searchQuery || "";
  const category = req.query.category || "";

  //variants of search
  if (category === "videos") {
    searchYouTubeMusic();
  }

  if (category === "playlists") {
  }

  if (category === "albums") {
    searchYouTubeAlbum(searchQuery)
      .then((resultsAlbums) => {
        console.log(resultsAlbums);
        const title = "results";
        const searchResponce = "albums";
        res.render(createPath("index"), {
          title,
          resultsAlbums,
          searchResponce,
        });
      })
      .catch((error) => {
        console.error("Error occurred while searching YouTube albums:", error);
        // Handle the error as needed
        res.render(createPath("index"), {
          title: "Error",
          errorMessage: "An error occurred",
        });
      });
  }

  if (category === "singers") {
  }

  // Ваша логика обработки поискового запроса
  // В данном примере просто выводим результат в консоль
  console.log(`поисковой запрос: ${searchQuery}, ${category}`);

  //search function
  function searchYouTubeMusic() {
    const requestUrl = `${apiUrl}?q=${encodeURIComponent(
      searchQuery
    )}&part=snippet&key=${apiKey}&type=video,playlist&maxResults=50`;

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => displaySearchResults(data.items))
      .catch((error) => console.error("Error:", error));
  }

  //display function
  function displaySearchResults(resultsVideos) {
    title = "videos";
    searchResponce = "videos";
    res.render(createPath("index"), { title, resultsVideos, searchResponce });
  }
});

async function searchYouTubeAlbum(searchQuery) {
  try {
    const info = await api.initalize(); // Retrieves Innertube Config
    const result = await api.search(searchQuery, "album"); // just search for album
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error("Error occurred while searching YouTube album:", error);
    return null; // or handle the error in a way appropriate to your application
  }
}
app.use((req, res) => {
  const title = "error";
  res.status(404).render(createPath("error"), { title });
});
