const express = require("express");
const productController = require("../controllers/product.controller");

const productRouter = express.Router();

//productRouter.get("/product/getName", productController.getName)
productRouter.get("/product/getArray", productController.getArray)
productRouter.post("/product/addElement", productController.addElement)




module.exports = productRouter;
