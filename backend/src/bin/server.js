const express = require("express");
const app = express();
const port = 4500;
const dotenv = require("dotenv")
const cors = require('cors');
const path=require('path')
const userRoute=require('../Routes/user')
const storyRoute=require('../Routes/story')
var bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
require("../bootstrap/index");
dotenv.config({path:'../config/'})

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api/user",userRoute)
app.use("/api/story",storyRoute)

app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
