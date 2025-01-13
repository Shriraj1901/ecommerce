const express = require('express')
const connectDatabase = require('./db/Database')
const ErrorHandler =require('./utlis/ErrorHandler')
const app=express()



if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({
        path:'backend/config/.env'
    })
}   
    




//config

connectDatabase();
app.use(ErrorHandler);

module.exports=app;