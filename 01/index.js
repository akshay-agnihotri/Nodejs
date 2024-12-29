const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("New Request Received");

  const logMessage = `Request received at ${new Date().toISOString()}\n`;

  fs.appendFile("./log.txt", logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    } else {
      console.log("url");
      switch (req.url) {
        case "/":
          res.end("homepage");
          break;
        case "/about":
          res.end("about page");
          break;
        default:
          res.end("oops something went wrong!!  404");
      }
    }
  });
});

server.listen(8000, () => {
  console.log("server is started");
});
