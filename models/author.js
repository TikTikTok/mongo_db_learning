const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const BookSchema = new Schema({
  name:String,
  pages: Number,
})
const authorSchema =  new Schema({
  name:String,
  age:Number,
  books:[BookSchema]
});


const AuthorBook = mongoose.model('author',authorSchema);

module.exports = AuthorBook;
