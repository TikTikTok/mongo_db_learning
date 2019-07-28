const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('Saving records ', function()
{
  //create tests
  it('Saving records to database ', function(done){

    var char = new MarioChar({
      name:'Mario',
      weight: 34
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    }).catch(done);
  });

  //Next tests

});
