// Create a RecordStore that has a name, city and multiple records in it's inventory
// Give the RecordStore a balance i.e. cash in bank.

var assert = require('assert');
var Store = require('../record_store.js');
var Record = require('../record.js');

describe("Record Store", function(){

  var hogsHead;
  var antigone;

  before(function(){
    hogsHead = new Store("Hogs Head", "Edinburgh");
    antigone = new Record("Antigone", "Heavan Shall Burn", 19.31);
  })

  it("has a name", function(){
    assert.equal("Hogs Head", hogsHead.name);
  })

  it("has a city", function(){
    assert.equal("Edinburgh", hogsHead.city);
  })

  it("has no stock", function(){
    assert.deepEqual([], hogsHead.stock);
  })

  it("can add records to stock", function(){
    hogsHead.addRecord(antigone);
    assert.equal(1, hogsHead.stock.length);
  })

})