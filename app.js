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
// actions 
app.put('/deposit/:id', function (req, res) {
console.log(req.body) ;
const user = getSingleUser(req.params.id);
user.cash = parseInt(user.cash)+parseInt(req.body.amount) ;
//************************************************** */
/*JSONObject person =  jsonArray.getJSONObject(0).getJSONObject("person");
person.put("name", "Sammie");*/
  
  res.send('user cash updated !!')
})

app.listen(3000, () => {
  console.log("hello server 3000 !! ");
});
