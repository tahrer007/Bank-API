const express = require("express");
const app = express();

app.get('/addUser', (req, res) => {
    res.send(`<h1>add new user</h1>`)
  });

app.listen(3000,()=>{
    console.log("hello server 3000 !! ")
})