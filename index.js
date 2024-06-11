const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const todorouter = require("./Routes/todoRoute");
const authroute = require("./Routes/authRoute")
app.use(cors());
app.use(express.json());

app.use("/pern",todorouter);
app.use("/auth",authroute);


app.listen(5000,()=>{
    console.log("Listening on port 5000");
})