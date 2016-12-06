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

/*
var constructor = require("can-connect/constructor/constructor");
var canMap = require("can-connect/can/map/map");
var canRef = require("can-connect/can/ref/ref");
var constructorStore = require("can-connect/constructor/store/store");
var dataCallbacks = require("can-connect/data/callbacks/callbacks");
var callbacksCache = require("can-connect/data/callbacks-cache/callbacks-cache");
var dataParse = require("can-connect/data/parse/parse");
var dataUrl = require("can-connect/data/url/url");
var realTime = require("can-connect/real-time/real-time");
var callbacksOnce = require("can-connect/constructor/callbacks-once/callbacks-once");

var behaviors = [
  constructor,
  canMap,
  canRef,
  constructorStore,
  dataCallbacks,
  dataParse,
  dataUrl,
  realTime,
  callbacksOnce
];

var projectConnection = can.connect(behaviors,{
    url: "/projects",
    Map: Project,
    List : Project.List
});
*/

module.exports = Project;
