var can = require('can-util/namespace'),
  PageControl = require('../common/pagecontrol'),
  domData = require("can-util/dom/data/data"),
  $ = require('can-jquery'),
  Item = require('../models/item');

var TestPage = PageControl.extend({
  route : "viewitems"
},{
  view : can.stache(require('raw-loader!./viewitems.html')),

  getData : function(){    
    return {
        items : Item.getList({})
    }
  },
  preRender : function(vm){
    console.log(vm.items);
  },
  '.item a#change-title click' : function(el,ev){
    ev.stop();
    var item = el.closest('.item').domData('model');
    item.title = "New title";
    item.save();
    //itemConnection.save(item);
  },
  '.item a#delete click' : function(el,ev){
    ev.stop();
    var item = el.closest('.item').domData('model');
    item.destroy();
    //itemConnection.destroy(item);
  }
});


module.exports = TestPage;
