// reuiring express and data base and cors
const express = require('express');
const database = require('../db/index');
const cors = require('cors');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var validator = require('validator');

// calling Schema
let expensesModel = database.expensesModel;
let users = database.users;

// invoking express
let app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('build'));

//Post request
// app.post('/expenses', (req, res) => {
//   console.log(req.body);
//   const {
//     expensesTypes,
//     amount,
//     createdAt,
//     description,
//     first_name,
//     last_name,
//     email,
//   } = req.body;

//   //Create document for saving expenses
//   let expensesDocument = new expensesModel({
//     expensesTypes: expensesTypes,
//     amount: amount,
//     createdAt: createdAt,
//     description: description,
//     first_name: first_name,
//     last_name: last_name,
//     email: email,
//   });

//   //save function for expenses
//   expensesDocument.save((err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     } else {
//       res.status(201).send('Saved expenses !');
//     }
//   });
// });

app.get('/expenses', (req, res) => {
  expensesModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

/////////////////////////////////////////////////////////////////////////

// post request for register

/// it checks it the email is already registerred or not

app.post('/register', async (req, res) => {
  // take the info from the post request from the register component's post request
  var { first_name, last_name, email, password } = req.body;

  // searach for the incoming email.
  try {
    var result = await users.findOne({ email: email });

    /// if the email is not found it will do the registration process
    if (result === null) {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.log('===> Failed to hash', err);
        } else {
          var user = new users({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hash,
          });
          user
            .save()
            .then((result) => {
              res.send({ message: 'Registered', user: result });
            })
            .catch((err) => {
              console.log('========> failed to save user', err);
            });
        }
      });

      // if the email is found it will send the message that the email.
    } else {
      res.send({ message: 'email already exsists' });
    }
  } catch (err) {
    console.log('=========> error in register', err);
  }
});

//////////////////////////////////////////////////////////////
// post request for login
app.post('/login', async (req, res) => {
  var { email, password } = req.body;

  try {
    var user = await users.findOne({ email: email });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        res.send({ message: 'welcome to our website', email: user.email });
      } else {
        // Passwords don't match
        res.send({ message: 'incorrect password' });
      }
    } else {
      res.send({ message: 'User does not exist' });
    }
  } catch (error) {
    console.log('error in login request', error);
  }
});

//////////////////////////////////////////////////////////////////

app.put('/expenses', async (req, res) => {
  const { email, expenses } = req.body;

  try {
    var user = await users.findOne({ email: email });
    if (user) {
      user.expenses.push(expenses);
      var newUser = await user.save();

      res.send('espensses added');
    }
  } catch (error) {
    console.log('failed to add expenses', error);
  }
});

///////////////////////////////////////////////////////////////////

app.get('/expenses/:email', async (req, res) => {
  const { email } = req.params;
  try {
    var user = await users.findOne({ email: email });
    if (user) {
      res.send(user.expenses);
    } else {
      res.send('could not find data');
    }
  } catch (error) {
    console.log('error in get all function ===>', error);
  }
});

//////////////////////////////////////////////////////////////////

app.get('/search/:email', async (req, res) => {
  const { email } = req.params;
  try {
    var user = await users.findOne({ email: email });
    if (user) {
      res.send(user.expenses);
    } else {
      res.send('could not find data');
    }
  } catch (error) {
    console.log('error in get all function ===>', error);
  }
});

/////////////////////////////////////////////////////////
app.get('/user', (req, res) => {
  let { email } = req.query
  // find user by id function

  users
    .findOne({
      email: email
    })
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.send('User does not exist');
      }
    })
    .catch((err) => {
      res.send('error: ' + err);
    });
});


module.exports = app;
