const {bucket} = require('./index');
const N1qlQuery = require('couchbase').N1qlQuery;
const faker = require('faker');
const uuid = require('uuid');


let experienceModel = () => {};

experienceModel.getAll = (callback) => {
    let statement = 'SELECT * FROM ' + bucket._name;
    let query = N1qlQuery.fromString(statement);
    bucket.query(query, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
}

experienceModel.save = (data, callback) => {
    let experience = {
        location:faker.Address.city(),
        category: faker.random.array_element(['BOAT RIDE', 'INTIMATE CONCERT', 'FOOD TASTING', 'WORKSHOP', 'ANIMAL ENCOUNTER']),
        imgurl:'https://loremflickr.com/320/240/dog',
        title: faker.Lorem.words(),
        price: faker.random.number(200),
        starRating:faker.random.array_element([1,2,3,4,5]),
        numOfReviews:faker.random.number(200),
    }
    let id = data.id ? data.id : uuid.v4();
    bucket.upsert(id, experience, (error, result) => {
        if (error) {
            console.log(error);
            return callback(error, null);
        }
        callback(null, result);
    })
}



module.exports = { experienceModel }


// new Experience({
//         location:faker.Address.city(),
//         category: faker.random.array_element(['BOAT RIDE', 'INTIMATE CONCERT', 'FOOD TASTING', 'WORKSHOP', 'ANIMAL ENCOUNTER']),
//         imgurl:'https://loremflickr.com/320/240/dog',
//         title: faker.Lorem.words(),
//         price: faker.random.number(200),
//         starRating:faker.random.array_element([1,2,3,4,5]),
//         numOfReviews:faker.random.number(200),
//     }).save((err, newExperience)=>{
//         if(err){console.error(err)}
//         else{console.log('created new exp:', newExperience)};
//     })