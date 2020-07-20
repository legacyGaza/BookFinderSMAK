// reuiring express and data base and cors
const express = require('express');
const database = require('../db/index');
const cors = require('cors');
var bodyParser = require('body-parser');
// const users = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
//app.use(express.static(__dirname + '/../front-end/dist'));
app.use(express.static('build'));

// Routes for using users db
// var Users = require('./routes/Users');
// app.use('/users', Users);

//Post request
app.post('/expenses', (req, res) => {
  console.log(req.body);
  const {
    expensesTypes,
    amount,
    createdAt,
    description,
    first_name,
    last_name,
    email,
  } = req.body;

  //Create document for saving expenses
  let expensesDocument = new expensesModel({
    expensesTypes: expensesTypes,
    amount: amount,
    createdAt: createdAt,
    description: description,
    first_name: first_name,
    last_name: last_name,
    email: email,
  });

  //save function for expenses
  expensesDocument.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send('Saved expenses !');
    }
  });
});

//Post request
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

//search request by email
app.get('/expenses/:email', (req, res) => {
  const emailVal = req.params.email;
  expensesModel
    .find({ email: emailVal })
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
              res.send({ message: 'registerred', user: result });
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
app.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(token);
        } else {
          // Passwords don't match
          res.status(400).json({ error: 'User does not exist' });
        }
      } else {
        res.json({ error: 'User does not exist' });
      }
    })
    .catch((err) => {
      res.send('error: ' + err);
    });
});

//////////////////////////////////////////////////////////////////
// get request for profile
app.get('/profile', (req, res) => {
  var decoded = jwt.verify(
    req.headers['authorization'],
    process.env.SECRET_KEY
  );
  // find user by id function

  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send('User does not exist');
      }
    })
    .catch((err) => {
      res.send('error: ' + err);
    });
});

/////////////////////////////////////////////////////////
//default port and lisetning

// var port = process.env.PORT || 4040;
// app.listen(port, () => {
//   console.log(`app listen to port ${port}`);
// });
// console.log('heeelllllllooooo kaaaarrrraaaaam')
module.exports = app;
