var express = require('express')
var env = require('dotenv')
var bodyParser = require('body-parser')
const cors = require("cors")
var mongoose = require('mongoose');
// const MONGODB_URI = 'mongodb+srv://<your_user>:<your_password>@cluster0.blzhs.mongodb.net/<your_database>?retryWrites=true&w=majority'
var app = express()

//app.use(bodyParser.json())
app.use(express.json())

// routes
const authRoutes = require('../routes/auth')
const adminRoutes = require('../routes/admin/auth')


env.config()

mongoose.connect
    (process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true }
    ).then( () => {
        console.log('Connected to MongoDB successfully!')        
    })

app.use('/api', authRoutes);    
app.use('/api', adminRoutes);    

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})