// const pg = require('pg');
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/simexp';

// const client = new pg.Client(connectionString);
// const query = client.query(
//     'CREATE TABLE simexp(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', () => { client.end(); });



const pg = require('pg');
const Sequelize = require('sequelize');

// psql -h localhost


const db = new Sequelize('simexp', 'postgres', 'example', {
    host: '54.183.231.150',
    dialect: 'postgres',
    logging: false
})

// docker
// const db = new Sequelize('simexp', 'postgres', 'example', {
//     dialect: 'postgres',
//     host: 'db',

// })

db.authenticate()
    .then(()=> console.log('postgres is running'))
    .catch(err=> console.error(err))

module.exports = db;
// is the index
// const Sequelize = require('sequelize');

// const db = require('./index');

// const productImgs = db.define('productImgs', {
//    id: {
//        type: Sequelize.INTEGER,
//        primaryKey: true,
//        autoIncrement: true,
//        allowNull: false
//    },
//    productName: {
//        type: Sequelize.STRING,
//        allowNull: false
//    },
//    imageurl: {
//        type: Sequelize.ARRAY(Sequelize.TEXT),
//        allowNull: false,
//    }
// }, {timestamps: false});

// db.sync({force:false})
// .then(()=> console.log('synced postgres db'))
// .catch(err=> console.log('postgres database failed'))

// module.exports = productImgs;
// is the models