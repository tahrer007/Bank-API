const express = require("express");
const app = express();
const { loadUsers } = require("./crud/utils");
const { addUser } = require("./crud/adduser");
const { getSingleUser } = require("./crud/getSingleUser");
const { deposit } = require("./crud/deposit");
const { updateCredit } = require("./crud/updateCredit");
const { withdrow } = require("./crud/withdrow");
//app.use(express.json());
app.use(express.urlencoded());
//get all users
app.get("/users", (req, res) => {
  try {
    res.status(200).send(loadUsers());
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
//add new user
app.post("/new", (req, res) => {
  try {
    res.status(201).send(addUser(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//***************************************************************** */
//get user by id
app.get("/:id", (req, res) => {
  try {
    res.status(200).send(getSingleUser(req.params.id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
// deposit
app.put("/deposit/:id", (req, res) => {
  try {
    res.status(200).send(deposit(req.params.id, req.body.amount));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
//update credit
app.put("/updateCredit/:id", (req, res) => {
  try {
    res.status(200).send(updateCredit(req.params.id, req.body.newCredit));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
//withdrow money 
app.put("/withdrow/:id", (req, res) => {
  try {
    res.status(200).send(withdrow(req.params.id, req.body.amount));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("hello server 3000 !! ");
});
