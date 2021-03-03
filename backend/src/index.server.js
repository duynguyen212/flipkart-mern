var express = require('express')
var env = require('dotenv')
var bodyParser = require('body-parser')
const cors = require("cors")
var mongoose = require('mongoose');
// const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.blzhs.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
// string 'mongodb+srv://root:admin4231@cluster0.blzhs.mongodb.net/ecommerce_flipkart?retryWrites=true&w=majority'
var app = express()

app.use(bodyParser.json())
//app.use(express.json())

// routes
const userRoutes = require('../routes/user')

env.config()

mongoose.connect
    ( process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true }
    ).then( () => {
        console.log('Connected to MongoDB successfully!')        
    })

app.use('/api', userRoutes)    

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})