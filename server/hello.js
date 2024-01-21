// Загружаем HTTP модуль
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Создаём HTTP-сервер
const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log(req.url, req.method);

  // Устанавливаем HTTP-заголовок ответа с HTTP статусом и Content type
  res.writeHead(200, { "Content-Type": "application/json" });

  // res.write(
  //   "<head><link rel='stylesheet' href='./assets/css/pages/index.css' /></head>"
  // );

  // res.write("<h1>Hello World</h1>");
  // res.write("<p>My name is Amir</p>");

  const data = JSON.stringify([
    { name: "Слава КПСС", age: 34 },
    { name: "Замай", age: 37 },
  ]);
  // Отсылаем тело ответа
  res.end(data);
});

// Выводим лог как только сервер будет запущен
server.listen(port, hostname, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://${hostname}:${port}/`);
});
