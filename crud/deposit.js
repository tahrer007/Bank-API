const e = require("express");
const fs = require("fs");
const { loadUsers, saveUsers, stringToJson } = require("./utils");
const deposit = (id, amount) => {
  const usersData = loadUsers();
  // usersData is a bad name why ? 

  // data is a general name everything is a data even string or bool usersData can be just users

  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === id) {
      usersData[i].cash = parseInt(usersData[i].cash) + parseInt(amount);
      break;
    }

    // the for loop is ok that not bad thing but you can to it with other function like map
  }
  saveUsers(usersData);
  return "deposit done";
  // res.status().send
  // or if you dont want to return anything use res.end()
};

// this is should be controller
// use try and catch in this function
// use req ,res in this function

module.exports = {
  deposit,
};
