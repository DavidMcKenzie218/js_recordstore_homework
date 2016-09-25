var _ = require('lodash');

var Customer = function(){
  this.collection = [];
  this.budget = 100;
}

Customer.prototype = {
  reset: function(){
    this.collection = [];
  },
  addRecord: function(record){
    this.collection.push(record);
  }, 
  removeRecord: function(record){
    var removedRecordIndex = _.findIndex(this.stock, function(item){
      return item === record;
    })
    var removedRecord = this.collection.splice(removedRecordIndex, 1);
    return removedRecord;
  }, 
  canBuyrecord: function(record){
    if(record.price <= this.budget){
      this.addRecord(record);
      return true;
    }else{
      return false;
    }
  },
  sellRecord: function(record){
    var soldRecord = this.removeRecord(record);
    this.budget += soldRecord[0].price;
  }
}

module.exports = Customer;