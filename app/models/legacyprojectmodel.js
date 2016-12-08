
require("can-connect/can/model/model");
require("can-map-define");
var can = require('can-util/namespace');

var LegacyItem = can.Model.extend({
  destroy : 'DELETE /items/{id}',
  update : 'POST /items'
},{
  title : {
    type : String
  }
})

var Project = can.Model.extend({
  findOne : 'GET /projects/{id}'
},{
  define : {
    title : {
      type : String
    },
    items : {
      Type : LegacyItem.List
    }
  }
})

Project.getManuallyDefinedProject = function(){
  
  var items = new LegacyItem.List([{
    id: 11,
    title : 'Item 1'
  }, {
    id : 12,
    title : 'Item 2'
  }]);
  
  var project = new Project({
    id : 2,
    title : 'Test Project'
  });
  
  project.attr('items', items);
  
  return project;
}

module.exports = Project;
