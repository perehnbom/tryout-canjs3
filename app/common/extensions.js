var $ = require('can-jquery'),
  domData = require("can-util/dom/data/data");

$.Event.prototype.stop = function(){
  this.stopPropagation();
  this.preventDefault();
};

$.prototype.domData = function(name){
  return domData.get.call(this[0], name);
};
