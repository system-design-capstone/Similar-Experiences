const {Experience} = require('../models');
const faker = require('Faker');

for(let i = 0; i < 1; i++){
    new Experience({
        location:faker.address.city(),
        category: faker.random.arrayElement(['BOAT RIDE', 'INTIMATE CONCERT', 'FOOD TASTING', 'WORKSHOP', 'ANIMAL ENCOUNTER']),
        imgurl:'https://loremflickr.com/320/240/dog',
        title: faker.lorem.words(),
        price: faker.random.number(200),
        starRating:faker.random.arrayElement([1,2,3,4,5]),
        numOfReviews:faker.random.number(200),
    }).save((err, newExperience)=>{
        if(err){console.error(err)}
        else{console.log('created new exp:', newExperience)};
    })
}