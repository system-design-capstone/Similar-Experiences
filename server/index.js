const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const connection = require('../database/mongodatabase/index');
// const connection = require('../database/couchbasedatabase/index');
// const connection = require('../database/mysqldatabase/index');
const connection = require('../database/postgresdatabase/index');
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