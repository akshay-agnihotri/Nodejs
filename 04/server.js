// const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("hello from homePage");
});

app.get("/about", (req, res) => {
  res.end("hello from aboutPage");
});

app.listen(8000, () => {
  console.log("hello world");
});

// const server = http.createServer(app);

// server.listen(8000, () => {
//   console.log("hello world this is akshay agnihotri");
// });
