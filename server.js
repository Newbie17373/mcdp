const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

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

console.log(path.join(__dirname, "assets"));
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  const title = "index";
  res.render(createPath("index"), { title });
});

app.get("/contacts", (req, res) => {
  const title = "contacts";
  res.render(createPath("index"), { title });
});

app.get("/index.html", (req, res) => {
  res.redirect("/");
});

app.get("/index.html", (req, res) => {
  res.redirect("/");
});

app.use((req, res) => {
  const title = "error";
  res.status(404).render(createPath("error"), { title });
});
