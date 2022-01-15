const fs = require("fs");
const { loadUsers, saveUsers, stringToJson  } = require("./utils");

const addUser = (body) => {
  const users = loadUsers();
  users.find((user) => {
    if (user.id === body.id) {
      throw Error("The user is allready exist");
    }
  });

  users.push({
    id:body.id ,
    name : body.name ,
    cash :(body.hasOwnProperty("cash")?body.cash : 0),
    credit :(body.hasOwnProperty("credit")?body.credit : 0),

  });
  console.log(body);
  saveUsers(users);
  return stringToJson("new-client", body);
 
};

module.exports = {
  addUser,
};
