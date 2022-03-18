const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require ('dotenv');
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

//Mongodb connection
const dbConfig = require('./db');


const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    res.send("It works"); 
});

app.use(express.json());
app.use(cookieParser());
 

app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})


//Api for room management Ramesh 
const roomsRoute = require('./routes/rooms');
app.use('/api/rooms',roomsRoute);




