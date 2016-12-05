require('can-define/map/map');
require('can-connect');
require("can-define/list/list");
var can = require('can-util/namespace');
var baseMap = require("can-connect/can/base-map/base-map");
var fixture = require("./project-fixture");
var Item = require("./item");

var Project = can.DefineMap.extend({
  title : {
    type : String
  },
  items : {
    Type : Item.List
  }
})

Project.List = can.DefineList.extend({
    "#": Project
});

var projectConnection = baseMap({
    Map: Project,
    List : Project.List,
    url: "/projects",
    name: "project"
});

module.exports = Project;
