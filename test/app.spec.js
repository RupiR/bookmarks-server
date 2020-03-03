const app = require('../src/app');

describe('app', () => {
  it('GET / responds with 200 containing "Welcome to the bookmark API!"', () => {
    return supertest(app)
      .get('/')
      .set('Authorization', `Bearer ${process.env.API_TOKEN}`)
      .expect(200, 'Welcome to the bookmark API!');
  });
});
