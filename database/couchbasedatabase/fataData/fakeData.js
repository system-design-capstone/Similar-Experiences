const faker = require('faker');
const fs = require('fs');

fs.writeFile('data.csv', 'name, menu, is_closed, url, price, health_score', (err) => {
    if (err) throw err;
    console.log('Header created!');
    let recurseSeeding = (count = 0) => {
        if (count % 1000000 === 0) console.log('creating:', count + 1)
        if (count === 10000000) return;
        let name = faker.name.title();
        let menu = faker.internet.url();
        let is_closed = faker.random.boolean();
        let url = faker.internet.url();
        let price = faker.random.number({min: 1, max: 4});
        let health_score = faker.random.number({min: 1, max: 100});
        // let entry = '\n' + name + ', ' + menu + ', ' + is_closed + ', ' + url + ', ' + price + ', ' + health_score;
        let entry = '\n' + name + ', ' + menu + ', ' + is_closed + ', ' + url + ', ' + price + ', ' + health_score;
        fs.appendFile('data.csv', entry, (err) => {
            if (err) throw err;
            recurseSeeding(count + 1)
        });
    }  
    recurseSeeding();
});




// const faker = require('faker');
// const fs = require('fs');
// // var read = fs.createReadStream('./read');
// let write = fs.createWriteStream('./data.csv');
// const stream = require('stream');
// const {
//   RestaurantModel,
//   ReviewModel,
// } = require('./models.js');

// function writeOneMillionTimes(writer, data, encoding, callback) {
//   let i = 10 ** 7;
//   write();
//   function write() {
//     let ok = true;
//     const model = [
//       i.toString(), // reviewId:
//       faker.company.catchPhrase, // restaurant:
//       Math.floor(Math.random() * 5), // rating:
//       faker.lorem.paragraph(), // text:
//       faker.image.food(), // review_pic:
//       faker.image.avatar(), // image_url:
//       faker.name.findName(), // name:
//       faker.address.city(), // location:
//       Math.floor(Math.random() * 100), // friends:
//       Math.floor(Math.random() * 100), // reviews:
//       Math.floor(Math.random() * 100), // photos:
//       Math.random() > 0.5, // elite:
//       // faker.date.past(), // time_created:
//       '2018-01-01 00:00:00.00',
//     ];
//     do {
//       i--;
//       if (i === 0) {
//         // last time!
//         //   fs.appendFile('data.csv', `\n${model.join(',')}`, (err) => {
//         writer.write(`\n${model.join(',')}`, encoding, callback);
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(`\n${model.join(',')}`, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// }
// writeOneMillionTimes(write, '', 'utf8', () => { console.log('done') ;});
// fs.writeFile('data.csv', '#', (err) => {
//   if (err) { console.error(err); }
// fs.appendFile('data.csv')

// const i = 0;
// console.time('forming models');
// console.time('seeding');

// function batchSeed(i) {
//   if (i === 10**6) { return 'done'; }
//   if (i % 500 === 0) { console.log(i); }
//   // models.push(
//     //   new ReviewModel({
//   const model = ``
//     ${i.toString(), // reviewId:
//     ${faker.company.catchPhrase, // restaurant:
//     ${Math.floor(Math.random() * 5), // rating:
//     ${faker.lorem.paragraph(), // text:
//     faker.image.food(), // review_pic:
//     faker.image.avatar(), // image_url:
//     faker.name.findName(), // name:
//     faker.address.city(), // location:
//     Math.floor(Math.random() * 100), // friends:
//     Math.floor(Math.random() * 100), // reviews:
//     Math.floor(Math.random() * 100), // photos:
//     Math.random() > 0.5, // elite:
//     // faker.date.past(), // time_created:
//     '2018-01-01 00:00:00.00',
//   `;
//   fs.appendFile('data.csv', `\n${model.join(',')}`, (err) => {
//     if (err) { console.error(err); }
//     // if (i === max) {
//       // console.log('next batch, ', max);
//     batchSeed(i + 1);
//     // }
//   });
//   // })
//   // );
//   // model.save({ if_not_exist: true }, log);
// }

// console.time('4000...');
// batchSeed(1);
// console.timeEnd('4000...');
// });

// // models.forEach(model => model.save());
// console.timeEnd('seeding');