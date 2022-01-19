const e = require("express");
const fs = require("fs");
const { deposit } = require("./deposit");
const { loadUsers, saveUsers } = require("./utils");
const {withdrow} =require("./withdrow");


const transferring = (from,to , amount) => {
                      // this is a bad names please change it to something clearer
  const usersData = loadUsers();
  // the same for the name data, just users
  let actualAmount = 0 ; 

  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === from) { // what is from  ?? ? ? ? 
    
        actualAmount = withdrow(from,amount) ;  
        console.log("hi tahrer",actualAmount) ;   // remove console.log
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
  // this is a very long sting 
  // this is string is not for the client this is for the devs that see the logs in server
};

module.exports = {
    transferring,
};
