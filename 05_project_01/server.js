const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

// Routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
      <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
      </ul>
    `;
  return res.send(html);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === +id);
    return res.json(user);
  })
  .put((req, res) => {
    return res.end("hello this is a post request");
  });

app.listen(PORT, () => {
  console.log("hello world");
});
