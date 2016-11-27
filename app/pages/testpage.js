require('can-control');
require("can-define/map/map");

var can = require('can-util/namespace'),
  $ = require('can-jquery'),
  pageTemplate = can.stache(require('raw-loader!./testpage.html')),
  Item = require('../models/item');
  
  
var PageControl = can.Control.extend({
  init : function(el, options){
    this.vm = new can.DefineMap();
    this.vm.sampleItem = new Item({
      title : 'todo 2'
    })
    
    $(el).html(pageTemplate(this.vm));
  },
  'a#change-title click' : function(el,ev){
    ev.stopPropagation();
    ev.preventDefault();
    this.vm.sampleItem.title = 'New Title';
  }
});

module.exports = PageControl;
