const fs = require("fs");
const { deposit } = require("./deposit");
const { loadUsers } = require("./utils");

const getSingleUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === id);
  // utils function that called findUserById
  // move it to utils


  // if (!user) throw Error(`there is no user with id ${id}`);;
  // use it inside the contoller with try and catch
  return " there is no " + id + " id";
};
module.exports = {
  getSingleUser,
};
