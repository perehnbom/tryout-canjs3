require('can-control');
require("can-define/map/map");

var can = require('can-util/namespace'),
  $ = require('can-jquery'),
  pageTemplate = can.stache(require('raw-loader!./testpage.html')),
  Item = require('../models/item'),
  itemConnection = require('../models/itemconnection');
  
  
var PageControl = can.Control.extend({
  init : function(el, options){
    var vm = this.vm = new can.DefineMap();
    itemConnection.getList({}).then(function(items){
      vm.set('items', items);      
    });

    $(el).html(pageTemplate(vm));
    
  },
  'a#change-title click' : function(el,ev){
    ev.stopPropagation();
    ev.preventDefault();
    var itemEl = $(el).closest('.item');
    var item = itemEl.data('model');
    console.log(item);
  }
});

module.exports = PageControl;
