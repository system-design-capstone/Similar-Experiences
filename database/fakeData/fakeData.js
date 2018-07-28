const {Experience} = require('../models');
const faker = require('Faker');

for(let i = 0; i < 100; i++){
    new Experience({
        location:faker.Address.city(),
        category: faker.random.array_element(['BOAT RIDE', 'INTIMATE CONCERT', 'FOOD TASTING', 'WORKSHOP', 'ANIMAL ENCOUNTER']),
        imgurl:'https://loremflickr.com/320/240/dog',
        title: faker.Lorem.words(),
        price: faker.random.number(200),
        starRating:faker.random.array_element([1,2,3,4,5]),
        numOfReviews:faker.random.number(200),
    }).save((err, newExperience)=>{
        if(err){console.error(err)}
        else{console.log('created new exp:', newExperience)};
    })
}