const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/booksDB', { useNewUrlParser: true })
  .then(() => {
    console.log(' The connecting is good :) ');
  })
  .catch(err => {
    console.log(' Err when conecting To DataBase :( ', err);
  });
const loginSchema = mongoose.Schema({
  Email: { type: String },
  Password: { type: String },
});

var loginModel = mongoose.model('Userlog', loginSchema);

module.exports.loginModel = loginModel;
