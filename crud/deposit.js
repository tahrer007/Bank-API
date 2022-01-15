const e = require("express");
const fs = require("fs");
const { loadUsers, saveUsers, stringToJson } = require("./utils");
const deposit = (id, amount) => {
  const usersData = loadUsers();

  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === id) {
      usersData[i].cash = parseInt(usersData[i].cash) + parseInt(amount);
      break;
    }
  }
  saveUsers(usersData);
  return " deposit done";
};

module.exports = {
  deposit,
};
