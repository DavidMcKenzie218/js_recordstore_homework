var _ = require('lodash');

var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.stock = [];
  this.balance = 0;
}

Store.prototype = {
  reset: function(){
    this.stock = [];
    this.balance = 0;
  },
  addRecord: function(record){
    this.stock.push(record);
  }, 
  currentStock: function(){
    return this.stock;
  },
  sellRecord: function(record){
    var soldRecordIndex = _.findIndex(this.stock, function(item){
      return item === record;
    })
    var soldRecord = this.stock.splice(soldRecordIndex, 1);
    this.balance += soldRecord[0].price;
  }, 
  storeValue: function(){
    var recordValue = 0
    _.forEach(this.stock, function(item){
      recordValue += item.price;
    })
    return recordValue + this.balance;
  }
}

module.exports = Store;