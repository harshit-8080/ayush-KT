const express = require("express")
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");

const app = express();

app.use(userRouter);
app.use(productRouter);



app.listen(3000, ()=>{
    console.log("server started at 3000");
})