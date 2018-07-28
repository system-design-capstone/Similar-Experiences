const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/similarexp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
    console.log('connected to the database');
})

module.exports = db;