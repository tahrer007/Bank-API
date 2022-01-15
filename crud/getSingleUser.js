const fs = require("fs");
const { loadUsers } = require("./utils");

const getSingleUser = (id) => {
  let user;
  const users = loadUsers();
  //console.log(users)
  users.forEach((element) => {
    if (element.id === id) {
      console.log("10", element);
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
