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

app.use("/search", (req, res, next) => {
  const searchQuery = req.query.searchQuery || "";
  const category = req.query.category || "";

  //variants of search
  if (category === "videos") {
    searchVideos();
  }

  if (category === "playlists") {
    let firstIndex = searchQuery.indexOf("=");
    let lastIndex = searchQuery.lastIndexOf("&");
    let newPlaylistId = searchQuery.substring(
      firstIndex + 1,
      lastIndex || str.length
    );

    getTracks(newPlaylistId);
    console.log(newPlaylistId);

    //get tracks of album
    function getTracks(playlistId) {
      const requestUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&key=${apiKey}&maxResults=150`;

      fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => sendAlbumsTracklist(data.items))
        .catch((error) => console.error("Error:", error));
    }

    function sendAlbumsTracklist(resultsAlbum) {
      title = "playlist";
      searchResponce = "playlists";
      let albumArr = [];

      if (resultsAlbum.length) {
        let fetchPromises = resultsAlbum.map((result) => {
          const requestUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${result.contentDetails.videoId}&key=${apiKey}`;
          return fetch(requestUrl)
            .then((response) => response.json())
            .then((data) => albumArr.push(data.items[0]))
            .catch((error) => console.error("Error:", error));
        });

        Promise.all(fetchPromises)
          .then(() => {
            console.log(albumArr); // Этот console.log сработает, когда все запросы завершатся
            res.render(createPath("index"), {
              title,
              albumArr,
              searchResponce,
            });
          })
          .catch((error) => console.error("Error:", error));
      } else {
        // Обработка ситуации, когда resultsAlbum пустой
      }
    }
  }

  if (category === "albums") {
    searchAlbums(searchQuery)
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
  function searchVideos() {
    const requestUrl = `${apiUrl}?q=${encodeURIComponent(
      searchQuery
    )}&part=snippet&key=${apiKey}&type=video,playlist&maxResults=50`;

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => sendVideos(data.items))
      .catch((error) => console.error("Error:", error));
  }

  //display function
  function sendVideos(resultsVideos) {
    title = "videos";
    searchResponce = "videos";
    res.render(createPath("index"), { title, resultsVideos, searchResponce });
  }
});

async function searchAlbums(searchQuery) {
  try {
    const info = await api.initalize(); // Retrieves Innertube Config
    const result = await api.search(searchQuery, "album"); // just search for album

    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error("Error occurred while searching YouTube album:", error);
    return null; // or handle the error in a way appropriate to your application
  }
}

app.use("/album", (req, res, next) => {
  const album = req.query.albumId || "";

  console.log(`запрос на альбом: ${album}`);
  getTracks(album);

  //get tracks of album
  function getTracks(playlistId) {
    const requestUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&key=${apiKey}&maxResults=150`;

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => sendAlbumsTracklist(data.items))
      .catch((error) => console.error("Error:", error));
  }

  function sendAlbumsTracklist(resultsAlbum) {
    title = "album";
    searchResponce = "album";
    let albumArr = [];

    if (resultsAlbum.length) {
      let fetchPromises = resultsAlbum.map((result) => {
        const requestUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${result.contentDetails.videoId}&key=${apiKey}`;
        return fetch(requestUrl)
          .then((response) => response.json())
          .then((data) => albumArr.push(data.items[0]))
          .catch((error) => console.error("Error:", error));
      });

      Promise.all(fetchPromises)
        .then(() => {
          console.log(albumArr); // Этот console.log сработает, когда все запросы завершатся
          res.render(createPath("index"), {
            title,
            albumArr,
            searchResponce,
          });
        })
        .catch((error) => console.error("Error:", error));
    } else {
      // Обработка ситуации, когда resultsAlbum пустой
    }
  }
});

app.use((req, res) => {
  const title = "error";
  res.status(404).render(createPath("error"), { title });
});
