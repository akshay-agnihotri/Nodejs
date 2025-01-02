const http = require("http");
const fs = require("fs");
const url = require("url");

// Here we are making a switch case to handle all type of http request on each paths.
const server = http.createServer((req, res) => {
  if (req.url == "/favicon.ico") return;
  const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
  const myUrl = url.parse(req.url);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET")
          res.end(`this is a GET request from ${myUrl.pathname} route`);
        else if (req.method === "POST")
          res.end(`this is POST request from ${myUrl.pathname} route`);
        else if (req.method === "PUT")
          res.end(`this is the PUT request from ${myUrl.pathname} route`);
        else if (req.method === "PATCH")
          res.end(`this is a PATHCH request from ${myUrl.pathname} route`);
        else res.end(`this is a delete requests from ${myUrl.pathname} route`);
        break;
      case "/about":
        if (req.method === "GET")
          res.end(`this is a GET request from ${myUrl.pathname} route`);
        else if (req.method === "POST")
          res.end(`this is POST request from ${myUrl.pathname} route`);
        else if (req.method === "PUT")
          res.end(`this is the PUT request from ${myUrl.pathname} route`);
        else if (req.method === "PATCH")
          res.end(`this is a PATHCH request from ${myUrl.pathname} route`);
        else res.end(`this is a delete requests from ${myUrl.pathname} route`);
        break;
      default:
        res.end("OOPS something went wrong");
    }
  });
});

server.listen(8000, () => {
  console.log("server has started");
});
