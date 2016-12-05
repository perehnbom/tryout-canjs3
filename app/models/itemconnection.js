require('can-define/map/map');
require('can-connect');
require('can-fixture');


var can = require('can-util/namespace'),
  Item = require('./item');



var itemConnection = can.connect([
  require("can-connect/constructor/constructor"),
  require("can-connect/data/url/url")
],{
  url: "/items",
  instance: function(data){
    return new Item(data);
  }
});

var todoAlgebra = new can.set.Algebra(
    can.set.props.id("id")
);
var todoStore = can.fixture.store([
  { id: 1, title: 'Do the dishes'},
  { id: 2, title: 'Walk the dog'}
], todoAlgebra);

can.fixture("/items", todoStore);

/*
can.fixture({method: "delete", url: "/items/{id}"},
  function(request, response, headers, ajaxSettings){
    return {
    };
})
can.fixture({method: "get", url: "/items"},
  function(request, response, headers, ajaxSettings){
    return {
        data: [
            {id: 1, title: "item 1"},
            {id: 2, title: "item 2"}
        ]
    };
})
*/

module.exports = itemConnection;
