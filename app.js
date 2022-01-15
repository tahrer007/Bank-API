const express = require("express");
const app = express();
const { loadUsers } = require("./crud/utils");
const { addUser } = require("./crud/adduser");
const { getSingleUser } = require("./crud/getSingleUser");
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
app.post('/new', (req, res) => {
  
  try {
    console.log("body ",req.body)
    res.status(201).send(addUser(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//***************************************************************** */
//get user by id 
app.get("/:id", (req, res) => {
  try {
      //console.log("asdfsdfadsfdsafaf",getSingleUser(req.params.id))
    res.status(200).send(getSingleUser(req.params.id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

// add deposit 

app.listen(3000, () => {
  console.log("hello server 3000 !! ");
});
