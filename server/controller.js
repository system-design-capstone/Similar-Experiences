// const {Experience} = require('../database/mongodatabase/models')
// const db = require('../database/couchbasedatabase/models');
// const {bucket} = require('../database/couchbasedatabase/index');
// const {experienceModel} = require('../database/mysqldatabase/models')
const {experienceModel} = require('../database/postgresdatabase/models')

const controller = {
    get: (req, res)=> {

        // mongodb
        // const {starRating} = req.query
        // Experience.find({
        //     starRating: starRating
        // },(err, result)=>{
        //     if(err){console.error(err)}
        //     res.status(200).send(result)
        // })


        // couchbase
        // experienceModel.getAll((error, result) => {
        //     if (error) {
        //         res.status(400).send(error);
        //     }
        //     else {
        //         res.status(200).send(result);
        //     }
        // })

        // mysql and postgres
        experienceModel.findAll( {
            where: {
                id: [46128, 2865, 49569, 1488, 45600, 61991, 1418, 61919, 53326, 61680]
            },
        }).then(expMods => {
                if (expMods) { res.status(200).send(expMods) }
                else { res.status(404).send('List aint here')}
            })
            .catch(err => console.error(err))
        

        // bucket.get("walter", function (err, resRead) {/* handle results */}); 
    },
    post: (req, res)=> {

        //  mongodb
        // const { location ,category,imgurl, title, price, starRating, numOfReviews} = req.body;
        // new Experience({
        //     location: location,
        //     category: category,
        //     imgurl: 'https://loremflickr.com/320/240/dog',
        //     title: title,
        //     price: price,
        //     starRating: starRating,
        //     numOfReviews: numOfReviews
        // }).save((err,newExp)=>{
        //     if(err){console.error(err)}
        //     else {res.send(newExp)}
        // })

        // couchbase
        // experienceModel.save(req.body, (error, result) => {
        //     if (error) {
        //         res.status(400).send(error);
        //     }
        //     else {
        //         res.status(200).send(result);
        //     }
        // })

        // mysql and postgres

        const { location,
            category,
            imgurl,
            title,
            price,
            starRating,
            numOfReviews } = req.body;
            
        experienceModel.create({
            location,
            category,
            imgurl,
            title,
            price,
            starRating,
            numOfReviews,
        })
        .then(expMod => {
            res.status(201).send(expMod)
        })
        .catch(err => console.error(err))
    
    },

    put: (req, res) => {
        
        experienceModel.update({
            title: req.body.title,
            location: req.body.location,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(rowsUpdated) {
            res.status(200).send(rowsUpdated)
        })
        .catch(error => {})
        
    },

    delete: (req, res) => {


        experienceModel.destroy({
            where: {
              id: req.params.id
            }
          })
          .then(function() {
              res.send('yyyyet')
          })
          .catch(error => {});


    }


}

module.exports = controller


// const {starRating} = req.query
//         Experience.find({
//             starRating: starRating
//         },(err, result)=>{
//             if(err){console.error(err)}
//             res.status(200).send(result)
//         })

// const { location ,category,imgurl, title, price, starRating, numOfReviews} = req.body;
//         new Experience({
//             location: location,
//             category: category,
//             imgurl: 'https://loremflickr.com/320/240/dog',
//             title: title,
//             price: price,
//             starRating: starRating,
//             numOfReviews: numOfReviews
//         }).save((err,newExp)=>{
//             if(err){console.error(err)}
//             else {res.send(newExp)}
//         })