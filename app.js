const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const user = require("./routes/userRoutes");

app.use(cors('*'));
app.use(express.json());

//Test API call
const testCall = (req,res) => {
    console.log("JJ");
    res.status(200).json({
        message:"Test run sucessfully",
    });
};

app.get("/test",testCall);
app.use("/", user);


module.exports = app;
