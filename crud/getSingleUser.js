const fs = require("fs");
const { loadUsers } = require("./utils");

const getSingleUser = (id) => {
  let user;
  const users = loadUsers();
  users.forEach((element) => {
    if (element.id === id) {
      user = element;
    }
  });
  //throw Error(`there is no user with id ${id}`);
  if (user) return user;
  return " there is no " + id + " id";
};
module.exports = {
  getSingleUser,
};
