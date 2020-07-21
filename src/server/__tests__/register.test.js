const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);


it('Gets the register endpoint', async (done) => {
  // Sends GET Request to /test endpoint
  // const response = await request.post('/register').send({
  //   first_name: 'sara',
  //   last_name: 'dahman',
  //   email: 'sarrra123@hotmail.com',
  //   password: '12345',
  // });
  
  // expect(response.body.message).toBe('registerred');

  const response2 = await request.post('/register').send({
    first_name: 'sara',
    last_name: 'dahman',
    email: 'sarrra123@hotmail.com',
    password: '12345',
  });

  expect(response2.body.message).toBe('email already exsists')
   
  done();
});


//////// login tests ////////////////////////////////////
it('correct email & password // login', async (done) => {
  const response = await request.post('/login').send({
    email: 'Ahmed@gamil.com',
    password: '123',
  });
  
  expect(response.body.message).toBe('welcome to our website');
   
  done();
});


it('correct email & wrong password // login', async (done) => {
  const response = await request.post('/login').send({
    email: 'Ahmed@gamil.com',
    password: '1235555',
  });
  
  expect(response.body.message).toBe('incorrect password')
   
  done();
});

it('wrong email // login', async (done) => {
  const response = await request.post('/login').send({
    email: 'Ahmed123@gamil.com',
    password: '123',
  });
  
  expect(response.body.message).toBe('User does not exist');
   
  done();
}); 

////////////////////////
// it('testing adding expenses', async (done) => {
//   const response = await request.post('/addExpense').send({
//     email: 'Ahmed123@gamil.com',
//     password: '123',
//   });
  
//   expect(response.body.message).toBe('User does not exist');
   
//   done();
// }); 
