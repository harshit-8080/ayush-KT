const express = require("express");
const userController = require("../controllers/user.controller");
const userRouter = express.Router();


userRouter.get("/user/getName" , userController.getName)
userRouter.get("/user/getCity" ,userController.getCity)




module.exports = userRouter;
