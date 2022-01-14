const express = require("express");
const app = express();

app.get("",(req,res)=>{
    res.send("hello tahrer !! ") ; 

})

app.listen(3000,()=>{
    console.log("hello server 3000 !! ")
})