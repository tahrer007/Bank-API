const fs = require("fs");
const loadUsers = () => JSON.parse(fs.readFileSync("./db/users.json", "utf-8"));

const isUserExist = (users, userId) => users.some((user) => user.id === userId);

const saveUsers = (users) => {
  fs.writeFileSync("./db/users.json", JSON.stringify(users));
};

const stringToJson = (message, string, message2, string2) => {
  return JSON.stringify({ [message]: string, [message2]: string2 });
};

module.exports = {
  isUserExist,
  loadUsers,
  stringToJson,
  saveUsers,
};
