const e = require("express");
const fs = require("fs");
const { loadUsers, saveUsers, stringToJson } = require("./utils");
const updateCredit = (id, newCredit) => {
    if(parseInt(newCredit)<0) return "positve credit only !! "
    const usersData = loadUsers();
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === id) {
      usersData[i].credit = newCredit ;
      break;
    }
  }
  saveUsers(usersData);
  return " updateCredit done";
};

module.exports = {
    updateCredit,
};