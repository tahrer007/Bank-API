const e = require("express");
const fs = require("fs");
const { deposit } = require("./deposit");
const { loadUsers, saveUsers } = require("./utils");
const {withdrow} =require("./withdrow");


const transferring = (from,to , amount) => {
  const usersData = loadUsers();
  let actualAmount =0 ; 

  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === from) {
        actualAmount = withdrow(from,amount) ;  
        console.log("hi tahrer",actualAmount) ;  

      break;
    }
  }
  if(!actualAmount) return `user ${from} don't have money to transfer` ; 
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === to) {
        deposit(to,actualAmount ) ;     
      break;
    }
  }

  saveUsers(usersData) ;
  if(actualAmount< parseInt(amount)) return `user ${from} dont have enogth money to transfer ,only ${actualAmount} transfed to ${to}`
};

module.exports = {
    transferring,
};
