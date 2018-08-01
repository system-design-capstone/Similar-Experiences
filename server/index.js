const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index');
const router = require('./router');
const cors = require('cors');
const request = require('supertest');

const app = express();
const port = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/api', router)

app.listen(port, ()=>{
    console.log('Server is now listening on port ', port)
})

module.exports = app;