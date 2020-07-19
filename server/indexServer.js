const express = require("express");
let app = express();

const cors = require("cors");

var bodyParser = require("body-parser");
//const bcrypt = require("bcrypt");
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));

const db = require("../database");
const read = require("../database/read");
const log = require("../database/login.js");
const reg = require("../database/register");
let BooksModel = db.BooksModel;
let loginModel = log.loginModel;
let RegModel = reg.RegModel;
let ReadModel = read.ReadModel;

//take the data of the book that i seach about it and put in favorit list
app.post("/book", (req, res) => { 
  const { title, author, dateOfPublication , img} = req.body;
  
  let bookDocumentation = new BooksModel({
    title,
    author,
    dateOfPublication,
    img,
  });
  bookDocumentation
    .save()
    .then(() => res.status(201).send("saved"))
    .catch((err) => res.status(500).send(err + "err"));
});

//offer for me all the data in farovite -show the favorite  list
app.get("/favorite", (req, res) => {
  BooksModel.find({})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
}); 

//add to readlater lit
app.post("/readbook", (req, res) => { 

  const { title, dateOfPublication , img } = req.body;
  
  let readDoc = new ReadModel({
    title,
    dateOfPublication,
    img,
  });
 readDoc
    .save()
    .then(() => res.status(201).send("saved"))
    .catch((err) => res.status(500).send(err + "err"));
});

//offer the read list 
app.get("/readlater", (req, res) => {
  ReadModel.find({})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

// it inside favorite list through it i can delete whet i'm saved inside the list
app.delete('/removeOne',function(req,res){
  BooksModel.find({})
  .deleteOne({}).then((result)=>{
    res.send("DeleteOne");
  })
  .catch((err)=>{
    res.send(err)
  })
});
app.delete('/removeread',function(req,res){
  ReadModel.find({})
  .deleteOne({}).then((result)=>{
    res.send("DeleteOne");
  })
  .catch((err)=>{
    res.send(err)
  })
});


//for all users infos
app.post('/register', (req, res) => {

  const { FirstName, LastName, Email, Password } = req.body;
  let regDocumentation = new RegModel({ FirstName, LastName, Email, Password });

  regDocumentation.save().then(() =>
      res.status(201).send("created"))
      .catch((err) => res.status(500).send(err + "err"))
});

//take from regster and give me the ability to sign to main screen
app.get('/login/:Email/:Password', (req, res) => {

  const { Email, Password } = req.params;

  var email = req.body.Email;
  var password = req.body.Password;

  RegModel.find({ Email, Password })
      .then((result) => {
          if (result.length > 0) {
              res.send(true);
          }else{
              res.send(false);
          }
          console.log(result);
      })
      .catch((err) => {
          res.send(err);
      });
});
var port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
