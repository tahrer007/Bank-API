const express = require("express");
const app = express();
const { loadUsers} = require('./crud/utils');
const { addUser } = require('./crud/adduser');
app.use(express.json());

app.get("/users", (req, res) => {
    try {
      res.status(200).send(loadUsers());
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });

app.post("/add", (req, res) => {
  console.log(req.body);
  try {
    res.status(201).send(addUser(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("hello server 3000 !! ");
});
