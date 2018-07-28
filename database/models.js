const mongoose = require('mongoose');
const db = require('./index');

var experienceSchema = mongoose.Schema({
    location:{type: String, required: true},
    category:{type: String, required: true},
    imgurl:{type: String, require: true},
    title:{type: String, required: true},
    price:{type: Number, required: true},
    starRating:{type: Number, required: true},
    numOfReviews:{type: Number, required: true}
})

Experience = mongoose.model('Experience', experienceSchema);

module.exports = { Experience }