const Sequelize = require('sequelize');
const connection = require('./index.js');

const experienceModel = connection.define('SimilarExperience', {
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

}, { timestamps: false });

connection.sync({ force: false })
  .then(() => console.log('successfully synced mysql database'))
  .catch(err => console.log('mysql databse failed'))

module.exports = { experienceModel }

