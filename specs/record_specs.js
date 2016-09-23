//Create a constructor to create Record objects with artist, title, price

var assert = require('assert');
var Record = require('../record.js');

describe("Record:", function(){

  var antigone;

  before(function(){
    antigone = new Record("Antigone", "Heavan Shall Burn", 19.31);
  })

  it("has a title", function(){
    assert.equal("Antigone", antigone.title);
  })

  it("has an artist", function(){
    assert.equal("Heavan Shall Burn", antigone.artist);
  })

  it("has a price", function(){
    assert.equal(19.31, antigone.price);
  })

})