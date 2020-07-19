const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/booksDB', { useNewUrlParser: true })
  .then(() => {
    console.log(' The connecting is good :) ');
  })
  .catch(err => {
    console.log(' Err when conecting To DataBase :( ', err);
  });
const RegSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String },
  Password: { type: String },
});

let RegModel = mongoose.model('users', RegSchema);

module.exports.RegModel = RegModel;
