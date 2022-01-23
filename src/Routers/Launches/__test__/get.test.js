const request = require('supertest');

const app = require('../../../app');
const API_URL = require('../../../Routes');

describe('GET /launches', () => {
  test('should respond with status 200 and return data', async () => {
    await request(app)
      .get(API_URL.LAUNCHES_URL.BASE_URL)
      .set('Accept', /application\/json/)
      .expect(200);
  });
});
