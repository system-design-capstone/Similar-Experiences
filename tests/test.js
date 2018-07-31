const request = require('supertest');
const app = require('../server/index');

const testExperience = {
    location: 'test',
    category: 'test',
    imgurl: 'test',
    title: 'test',
    price: 5,
    starRating: 1,
    numOfReviews: 4
}

describe('/api/simexp integration test', () => {
    test('should be able save an exp and find it in the db', async () => {
      expect.assertions(2);
      await request(app)
        .post('/api/simexp')
        // .set('authorization', token)
        .send(testExperience);
      const { body, statusCode } = await request(app)
        .get(`${'/api/simexp'}/1`)
        // .set('authorization', token);
      expect(body).toBe(testExperience);
      expect(statusCode).toBe(200);      
    });
  });