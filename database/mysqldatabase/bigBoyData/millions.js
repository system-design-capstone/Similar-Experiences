// const faker = require('Faker');
// const fs = require('fs');

// fs.writeFile('data.csv', 'location, category, imgurl, title, price, starRating, numOfReviews', (err) => {
//     if (err) throw err;
//     console.log('Header created!');
//     let recurseSeeding = (count = 0) => {
//         if (count % 1000000 === 0) console.log('creating:', count + 1)
//         if (count === 10000000) return;
//         let location = faker.Address.city();
//         let category = faker.random.array_element(['BOAT RIDE', 'INTIMATE CONCERT', 'FOOD TASTING', 'WORKSHOP', 'ANIMAL ENCOUNTER']);
//         let imgurl = 'https://loremflickr.com/320/240/dog';
//         let title = faker.Lorem.words();
//         let price = faker.random.number(200);
//         let starRating = faker.random.array_element([1,2,3,4,5]);
//         let numOfReviews = faker.random.number(200);
//         // let entry = '\n' + name + ', ' + menu + ', ' + is_closed + ', ' + url + ', ' + price + ', ' + health_score;
//         let entry = '\n' + location + ', ' + category + ', ' + imgurl + ', ' + title + ', ' + price + ', ' + starRating + ', ' + numOfReviews;
//         fs.appendFile('data.csv', entry, (err) => {
//             if (err) throw err;
//             recurseSeeding(count + 1)
//         });
//     }
//     recurseSeeding();
// });













