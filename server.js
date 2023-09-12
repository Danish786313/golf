const http = require('node:http');
const app = require("./index")
require('dotenv').config()
const { sequelize } = require('./models');
const port = process.env.port || 1000
const server = http.createServer(app)
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err)
    process.exit(1) // mandatory (as per the Node.js docs)
})
server.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`)
    sequelize.sync({alter: true}).then(() => { 
        console.log("Database connected")
    }).catch((err) => {
        console.log("Database not connected", err)
    }) 
})

