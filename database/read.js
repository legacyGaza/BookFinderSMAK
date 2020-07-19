const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/booksDB", { useNewUrlParser: true })
  .then(() => {
    console.log(" The connecting is good :) ");
  })
  .catch((err) => {
    console.log(" Err when conecting To DataBase :( ", err);
  });

let readbooksSchema = mongoose.Schema({
 title: { type: String },
 dateOfPublication: { type: String },
  img: { type: String },
  readlearter : {type : String}
});


let ReadModel = mongoose.model("readbooks", readbooksSchema);

module.exports.ReadModel = ReadModel;
