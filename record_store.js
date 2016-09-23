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
  }
}

module.exports = Store;