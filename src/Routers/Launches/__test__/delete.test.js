const request = require('supertest');

const app = require('../../../app');
const API_URL = require('../../../Routes');

describe('DELETE /launches', () => {
  test('should respond with status 404 and return success message if we dont have database', async () => {
    await request(app)
      .delete(`${API_URL.LAUNCHES_URL.BASE_URL}/1001`)
      .set('Accept', /application\/json/)
      .expect(404);
  });
});
