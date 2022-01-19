const express =require("express");
const { getUsers } = require("../controllers/user");
const { addUser } = require("../crud/adduser");
const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/", addUser)


module.exports = userRouter