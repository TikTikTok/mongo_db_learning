const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('Updating records ', function()
{
  var char;
beforeEach(function(done){
    char = new MarioChar({
    name:'Mario',
    weight:50
  });


  char.save().then(function(){
    assert(char.isNew === false);
    done();
  });
})

  it(' Update One record by name in to the database ', function(done){
      MarioChar.findOneAndUpdate({name:'Mario'},{name:'Chandan'}).then(function(){
        MarioChar.findOne({_id:char._id}).then(function(result){
            console.log(' Deleted... ',result);
          assert( result.name === 'Chandan');
          done();
        })
      });
  });

    it(' Update One the weight by 1 ', function(done){
      MarioChar.updateOne({},{$inc:{weight:1}}).then(function(){
        MarioChar.findOne({name:'Mario'}).then(function(result){
            console.log(' Deleted... ',result);
            var today = new Date();
            console.log('Date',today);
          assert(result.weight === 51);
          done();
        });
      });
    });
});
