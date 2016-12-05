require('can-define/map/map');
require('can-connect');
require('can-fixture');

var can = require('can-util/namespace');

var itemAlgebra = new can.set.Algebra(
    can.set.props.id("id")
);
var itemStore = can.fixture.store([
  { id: 1, title: 'Do the dishes'},
  { id: 2, title: 'Walk the dog'}
], itemAlgebra);

can.fixture("/items", itemStore);
