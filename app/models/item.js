require('can-define/map/map');
require('can-connect');
var can = require('can-util/namespace');

var Item = can.DefineMap.extend({
  title : {
    type : String
  },
  description : {
    type : String
  }
})

module.exports = Item;
