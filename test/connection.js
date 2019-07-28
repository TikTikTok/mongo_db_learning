const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// Connect to mongodb

//mongoose.connect('mongodb://localhost/test_mongodb');
mongoose.connect("mongodb://localhost:27017/test_mongodb", { useNewUrlParser: true });
// JQuery on click and once are same as below for mongodb
// element.on('click', function(){
//
// });

before(function(done){
mongoose.connection.once('open',function() {
  console.log('Connection has been made, now make fireworks ... ');
  done();
}).on('error', function(error){
  console.log('Connection error:',error);
});
});

beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function()
    {
      done();
    });
});
