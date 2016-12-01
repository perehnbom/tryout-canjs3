require('can-define/map/map');
require('can-connect');
require("can-define/list/list");
var can = require('can-util/namespace');

var Item = can.DefineMap.extend({
  title : {
    type : String
  },
  description : {
    type : String
  }
})

Item.List = can.DefineList.extend({
    "#": Item
});

module.exports = Item;
