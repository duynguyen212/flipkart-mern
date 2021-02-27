var express = require('express')
var env = require('dotenv')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
const url = 'mongodb+srv://lets_travel_admin:thietTaoLao%2369@cluster0.49fhw.mongodb.net/lets_travel?retryWrites=true&w=majority';

var app = express()

app.use(bodyParser.json())

env.config()

ongoose.connect(url,
    {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello from server Node JS'
    })
})

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})