const e = require("express");
const fs = require("fs");
const { loadUsers, saveUsers } = require("./utils");
let actualAmount = 0;
const withdrow = (id, amount) => {
  let intialAmount = parseInt(amount);
  const usersData = loadUsers();
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === id) {
      let cash = parseInt(usersData[i].cash);
      let credit = parseInt(usersData[i].credit);
      amount = parseInt(amount);

      //try to withdrow from cash
      if (cash) {
        if (cash >= amount) {
          cash -= amount;
          usersData[i].cash = cash;
          saveUsers(usersData);
          return `${amount} withdrowed`;
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
          return ` ${intialAmount} withdrowed `;
        } else {
          amount -= credit;
          actualAmount += credit;
          usersData[i].credit = 0;
          saveUsers(usersData);
          return
          "you don't have enough , only  " + actualAmount + " withdrowed !!";
        }
      } else if (actualAmount) {

        saveUsers(usersData);

        return (
          "you don't have enough , only  " + actualAmount + " withdrowed !!"
        );
      } else return "you can't withdrow anymoney !!";
      break;
    }
  }
};

module.exports = {
  withdrow,
};
