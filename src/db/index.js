// Require mongoose
const mongoose = require('mongoose');
// Connecting mongoose

mongoose
  .connect(
    'mongodb+srv://MhmdHourani:0597552045@bookfinder.actzs.mongodb.net/Expenses?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(' DB connected');
  })
  .catch((err) => {
    console.log('Error while connecting to DB', err);
  });

////////////////////////////////////////////////////////

let UserSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  expenses: [
    {
      date: { type: Date, default: Date.now },
      expensetype: { type: String, required: true },
      item: { type: String, required: true },
      amount: { type: Number, required: true },
      description: { type: String, required: true },
    },
  ],
});

let users = mongoose.model('users', UserSchema);
module.exports.users = users;
