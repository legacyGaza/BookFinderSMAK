const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);


it('Gets the register endpoint', async (done) => {
  // Sends GET Request to /test endpoint
  const response = await request.post('/register').send({
    first_name: 'sara',
    last_name: 'dahman',
    email: 'sarrra123@hotmail.com',
    password: '12345',
  });
  
  expect(response.body.message).toBe('registerred');

  const response2 = await request.post('/register').send({
    first_name: 'sara',
    last_name: 'dahman',
    email: 'sarrra123@hotmail.com',
    password: '12345',
  });

  expect(response2.body.message).toBe('email already exsists')
   
  done();
});
