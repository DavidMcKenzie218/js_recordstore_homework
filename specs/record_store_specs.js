// Create a RecordStore that has a name, city and multiple records in it's inventory
// Give the RecordStore a balance i.e. cash in bank.

var assert = require('assert');
var Store = require('../record_store.js');
var Record = require('../record.js');

describe("Record Store:", function(){

  var hogsHead;
  var antigone;

  before(function(){
    hogsHead = new Store("Hogs Head", "Edinburgh");
    antigone = new Record("Antigone", "Heavan Shall Burn", 19.31);
  })

  beforeEach(function(){
    hogsHead.reset();
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

  it("has a no money", function(){
    assert.equal(0, hogsHead.balance);
  })

})

// Create a method that lists the inventory.
// Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
// Create a method that reports on the financial situation of the store. Cash and value of inventory.

describe("Store Buisness:", function(){

  var hogsHead;
  var antigone;
  var veto;
  var iconoclast;

  before(function(){
    hogsHead = new Store("Hogs Head", "Edinburgh");
    antigone = new Record("Antigone", "Heavan Shall Burn", 19.31);
    veto = new Record("VETO", "Hevan Shall Burn", 15.63);
    iconoclast = new Record("Iconoclast", "Heavan Shall Burn", 9.47);
  })

  beforeEach(function(){
    hogsHead.reset();
    hogsHead.addRecord(antigone);
    hogsHead.addRecord(veto);
    hogsHead.addRecord(iconoclast);
  })

  it("can list the current stock", function(){
    assert.deepEqual([antigone, veto, iconoclast], hogsHead.currentStock());
  })

  it("can sell a record", function(){
    hogsHead.sellRecord(veto);
    assert.equal(15.63, hogsHead.balance);
    assert.deepEqual([antigone, iconoclast], hogsHead.currentStock());
  })

  it("can return the total value of the store", function(){
    assert.equal(44.41, hogsHead.storeValue());
  })

})