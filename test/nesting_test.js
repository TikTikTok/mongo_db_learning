const mongoose = require('mongoose');
const Author = require('../models/author');
const assert = require('assert');
mongoose.Promise = global.Promise;


describe('Nesting Recors',function() {

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });

  //create tests
  it('Create and author with sub-documents',function(done){
    var auth = new Author({
      name:'Chandan',
      age:28,
      books:[{name:'The One Thing',pages:300}]
    });

    auth.save().then(function(){
      Author.findOne({name:'Chandan'}).then(function(record){
        console.log('Author and Books records ',record);
        assert(record.books.length ===1);
        done();
      });
    });
  });


  it('Add an author and Books with sub-documents',function(done){
    var auth = new Author({
      name:'Vishwas',
      age:50,
      books:[{name:'The Secret',pages:250}]
    });

    auth.save().then(function(){
      Author.findOne({name:'Vishwas'}).then(function(record){
        console.log('Author and Books records ',record);
        // add a book to the books collection
        record.books.push({name:'4 hour work week',pages:500});
        record.save().then(function(){
          Author.findOne({name:'Vishwas'}).then(function(record){
            console.log('Author and Books records Inside ',record);
            assert(record.books.length ===2);
            done();
          });
        });
      });
    });
  });
});
