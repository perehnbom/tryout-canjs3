var $ = require('can-jquery'),
  domData = require("can-util/dom/data/data");

$.Event.prototype.stop = function(){
  this.stopPropagation();
  this.preventDefault();
};

$.prototype.domData = function(name){
  var model = domData.get.call(this[0], name);
  return fromCompute(model);
};

function fromCompute(obj){
  return obj && obj.isComputed ? obj() : obj;
}
