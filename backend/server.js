const express = require('express');


const app = express();
const mongoose = require('mongoose');
const dbConfig = require('./db');



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})




