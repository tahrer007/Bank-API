const e = require("express");
const fs = require("fs");
const { loadUsers, saveUsers } = require("./utils");

const withdrow = (id, amount) => {
  console.log("withdrow", id, amount);
  let actualAmount = 0;
  let intialAmount = parseInt(amount);
  const usersData = loadUsers();
  for (let i = 0; i < usersData.length; i++) {
    console.log(usersData[i].id, id);
    let cash = parseInt(usersData[i].cash);
    let credit = parseInt(usersData[i].credit);
    amount = parseInt(amount);

    if (usersData[i].id === id) {
      //try to withdrow from cash
      if (cash) {
        if (cash >= amount) {
          cash -= amount;
          usersData[i].cash = cash;
          saveUsers(usersData);
          return amount;
        } else {
          amount -= cash;
          actualAmount = cash;
          usersData[i].cash = 0;
        }
      }
      //try to withdrow from credit
      if (credit) {
        if (credit >= amount) {
          credit -= amount;
          usersData[i].credit = credit;
          saveUsers(usersData);
          return intialAmount;
        } else {
          amount -= credit;
          actualAmount += credit;
          usersData[i].credit = 0;
          saveUsers(usersData);
          return actualAmount;
        }
      } else if (actualAmount) {
        saveUsers(usersData);
        return actualAmount;
      } else return 0;
    }
  }
};

module.exports = {
  withdrow,
};
