const fs = require("fs");
const { loadUsers, saveUsers, stringToJson ,isUserExist } = require("./utils");

const addUser = (body) => {
  console.log(body);
  const users = loadUsers();
  users.find((user) => {
    if (user.id === body.id) {
      throw Error("The user is allready exist");
    }
  });
  users.push(body);
  console.log(body);
  saveUsers(users);
  return stringToJson("new-client", body);
 
};

module.exports = {
  addUser,
};
