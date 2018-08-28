const Sequelize = require('sequelize');

const db = require('./index');

const experienceModel = db.define('SimilarExperience', {
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imgurl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    starRating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numOfReviews: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: false});

db.sync({force:false})
    .then(()=> console.log('synced postgres db'))
    .catch(err=> console.log('postgres database failed'))

module.exports = {experienceModel};


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