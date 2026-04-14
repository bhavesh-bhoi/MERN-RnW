const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("Pages/home.html", (err, data) => {
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("Pages/about.html", (err, data) => {
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("Pages/contact.html", (err, data) => {
      res.write(data);
      res.end();
    });
  } else {
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
