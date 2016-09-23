var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.stock = [];
}

Store.prototype = {
  addRecord: function(record){
    this.stock.push(record);
  }
}

module.exports = Store;