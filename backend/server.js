if(process.env.NODE_ENV !== "PRODUTION"){
    require('dotenv').config({
        path:'config/.env'
    })
}

const app = require('./app')

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server for handling uncaught exception`)
})


const server = app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})