// const faker = require('Faker');
// const fs = require('fs');

// fs.writeFile('data2.csv', 'location, category, imgurl, title, price, starRating, numOfReviews', (err) => {
//     if (err) throw err;
//     console.log('Header created!');
//     let recurseSeeding = (count = 0) => {
//         if (count % 1000000 === 0) console.log('creating:', count + 1)
//         if (count === 100) return;
//         let location = faker.Address.city();
//         let category = faker.random.array_element(['BOAT RIDE', 'INTIMATE CONCERT', 'FOOD TASTING', 'WORKSHOP', 'ANIMAL ENCOUNTER']);
//         let imgurl = 'https://loremflickr.com/320/240/dog';
//         let title = faker.Lorem.words().join(' ');
//         let price = faker.random.number(200);
//         let starRating = faker.random.array_element([1,2,3,4,5]);
//         let numOfReviews = faker.random.number(200);
//         // let entry = '\n' + name + ', ' + menu + ', ' + is_closed + ', ' + url + ', ' + price + ', ' + health_score;
//         let entry = '\n' + location + ', ' + category + ', ' + imgurl + ', ' + title + ', ' + price + ', ' + starRating + ', ' + numOfReviews;
//         fs.appendFile('data2.csv', entry, (err) => {
//             if (err) throw err;
//             recurseSeeding(count + 1)
//         });
//     }
//     recurseSeeding();
// });



const faker = require('Faker');
const fs = require('fs');

const write = fs.createWriteStream('./data2.csv');

writeTenMillionItems = (writer, data, encoding, callback) => {
    let i = 10000000;
    function write() {
        let ok = true;
        do {
            const model = [
                // i.toString(), // item_id
                //   faker.commerce.productName(), // name
                // review.id // review_id
                faker.Address.city(),
                faker.random.array_element(['BOAT RIDE', 'INTIMATE CONCERT', 'FOOD TASTING', 'WORKSHOP', 'ANIMAL ENCOUNTER']),
                'https://loremflickr.com/320/240/dog',
                faker.Lorem.words().join(' '),
                faker.random.number(200),
                faker.random.array_element([1,2,3,4,5]),
                faker.random.number(200),
            ];
            i--;
            if (i === 0) {
                writer.write(`\n${model.join(',')}`, encoding, callback);
            } else {
                ok = writer.write(`\n${model.join(',')}`, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
        writer.once('drain', write);
        }
    }
    write();
}

writeTenMillionItems(write, '', 'utf8', () => {
    console.log('Ten Million Data populated in data.csv!');
});