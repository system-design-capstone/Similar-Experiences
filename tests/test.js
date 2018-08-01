const request = require('supertest');
const app = require('../server/index');

const testExperience = {
    location: 'test',
    category: 'test',
    imgurl: 'test',
    title: 'test',
    price: 5,
    starRating: 5,
    numOfReviews: 4
}

describe('/api/simexp integration test', () => {
    test('should be able save an exp and find it in the db', async () => {
      
      request(app)
        .post('/api/simexp')
        .send(testExperience);
      request(app)
        .get('/api/simexp')
        console.log(request(app));     
    });
  });