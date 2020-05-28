const express = require('express')
const app = express()
const port = 3050

// setup db
const configureDB = require('./config/database')
configureDB()

// enable express to parse json data
app.use(express.json())

// setup routes
const routes = require('./config/routes')
app.use('/',routes)

app.use(express.static('public'))

app.listen(port,()=>{
    console.log('Listening to port',port)
})