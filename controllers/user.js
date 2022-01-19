// conroller
// controller is where you put all the functions that you insert to the route
// this is the connection function in the route (the callback function)

const { loadUsers, isUserExist, saveUsers } = require("../crud/utils");


const getUsers = (req, res) => {
    try {
    const users = loadUsers()
      res.status(200).send(users);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }

  const addUser = (req, res) => {
    try {
        const user = req.body;
        // if(!isUserValid(user))throw Error("The user is not valid");
        const users = loadUsers();
        if(isUserExist(users, user.id)) throw Error("The user is allready exist");
        users.push(user)
        saveUsers(users)
      res.status(200).send(user);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };



  module.exports = {getUsers, addUser}