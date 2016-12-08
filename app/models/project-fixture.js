require('can-define/map/map');
require('can-connect');
require('can-fixture');

var can = require('can-util/namespace');

var algebra = new can.set.Algebra(
    can.set.props.id("id")
);
var store = can.fixture.store([{
  id: 1,
  title: 'Project 1',
  items : [{ id: 1, title: 'Item 1'},
  { id: 2, title: 'Item 2'}]
}], algebra);

can.fixture("/projects", store);
