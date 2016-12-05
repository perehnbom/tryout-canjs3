var can = require('can-util/namespace'),
  PageControl = require('../common/pagecontrol'),
  domData = require("can-util/dom/data/data"),
  $ = require('can-jquery'),
  Item = require('../models/item');

var TestPage = PageControl.extend({
  route : "viewitem/:id"
},{
  view : can.stache(require('raw-loader!./viewitem.html')),

  getData : function(options){
    return {
      //item : itemConnection.get({id : options.id})
      item : Item.get(options.id)
    }
  },
  '.item a#change-title click' : function(el,ev){
    ev.stop();
    var item = el.closest('.item').domData('model');
    item.title = "New title";
    item.save();
  }
});

module.exports = TestPage;
