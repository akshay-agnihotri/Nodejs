const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url == "/favicon.ico") return;
  const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
  const myUrl = url.parse(req.url);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("homePage");
        break;
      case "/about":
        res.end("aboutPage");
        break;
      default:
        res.end("OOPS something went wrong");
    }
  });
});

server.listen(8000, () => {
  console.log("server has started");
});
