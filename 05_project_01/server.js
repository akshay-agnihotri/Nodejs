const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;
const fs = require("fs");

// Routes
app.get("/users", (req, res) => {
  const html = `
      <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
      </ul>
    `;
  return res.send(html);
});

app.use(express.urlencoded({ extended: false }));

app
  .route("/api/users")
  .get((req, res) => {
    return res.json(users);
  })
  .post((req, res) => {
    //TODO: Create new user
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "sucess", id: users.length });
    });
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
  })
  .patch((req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }
    users[userIndex] = { ...users[userIndex], ...updates };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) throw err;
      return res.send({ status: "done", data: users[userIndex] });
    });
  })
  .delete((req, res) => {
    const updatedUsers = users.filter((user) => user.id !== +req.params.id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedUsers), (err) => {
      if (err) throw err;
      return res.send({ status: "success" });
    });
  });

app.listen(PORT, () => {
  console.log("hello world");
});
