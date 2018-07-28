const {Experience} = require('../database/models');

const controller = {
    get: (req, res)=> {
        const {starRating} = req.query
        Experience.find({
            starRating: starRating
        },(err, result)=>{
            if(err){console.error(err)}
            res.status(200).send(result)
        })
    },
    post: (req, res)=> {
        const { location ,category,imgurl, title, price, starRating, numOfReviews} = req.body;
        new Experience({
            location: location,
            category: category,
            imgurl: 'https://loremflickr.com/320/240/dog',
            title: title,
            price: price,
            starRating: starRating,
            numOfReviews: numOfReviews
        }).save((err,newExp)=>{
            if(err){console.error(err)}
            else {res.send(newExp)}
        })
    }
}

module.exports = controller