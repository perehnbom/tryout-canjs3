require('can-define/map/map');
require('can-connect');
require("can-define/list/list");
var can = require('can-util/namespace');
var baseMap = require("can-connect/can/base-map/base-map");
var fixture = require("./item-fixture");

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

var itemConnection = baseMap({
    Map: Item,
    List : Item.List,
    url: "/items",
    name: "item"
});

module.exports = Item;
