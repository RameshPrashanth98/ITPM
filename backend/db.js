const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://ItpmUSer:ITPM22@cluster0.byuvl.mongodb.net/Hotel_DB?retryWrites=true&w=majority'

mongoose.connect(mongoURL,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
})

var connection = mongoose.connection;

connection.on('error',()=>{
    console.log('Mongo Db connection failed')
})

connection.on('connected',()=>{
    console.log('Mongo Db connection sucesful')
})

module.exports = mongoose 


