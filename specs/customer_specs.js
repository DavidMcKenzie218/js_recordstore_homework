// Create a RecordCollector (or customer) constructor who can buy and sell records.

var assert = require('assert');
var Customer = require('../customer.js');
var Record = require('../record.js');

describe("Customer:", function(){

  var collector;
  var antigone;
  var rideTheLightning;

  before(function(){
    collector = new Customer();
    antigone = new Record("Antigone", "Heavan Shall Burn", 19.31);
    rideTheLightning = new Record("Ride the Lightning(special edition)", "Metallica", 101.39);
  })

  beforeEach(function(){
    collector.reset();
  })

  it("Has no records", function(){
    assert.deepEqual([], collector.collection);
  })

  it("Can add reords to his collection", function(){
    collector.addRecord(antigone);
    assert.equal(1, collector.collection.length);
  })

  it("Can remove records from his collection", function(){
    collector.addRecord(antigone);
    collector.removeRecord(antigone);
    assert.deepEqual([], collector.collection);
  })

  it("Has a budget", function(){
    assert.equal(100, collector.budget);
  })

  it("Can buy albums in his budget", function(){
    assert.equal(true, collector.canBuyrecord(antigone));
  })

  it("purchases an item", function(){
    assert.equal(true, collector.canBuyrecord(antigone));
    assert.equal(1, collector.collection.length);
    assert.equal(80.69, collector.budget);
  })

  it("album is out of budget and cannot be bought", function(){
    assert.equal(false, collector.canBuyrecord(rideTheLightning));
    assert.deepEqual([], collector.collection);
  })

  it("Can sell his records", function(){
    collector.canBuyrecord(antigone);
    collector.sellRecord(antigone);
    assert.equal(100, collector.budget);
    assert.deepEqual([], collector.collection);
  })

})