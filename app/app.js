
require('can-control');
require('can-stache');
require("can-define/map/map");
var can = require('can-util/namespace'),
  $ = require('can-jquery'),
  mainTemplate = can.stache(require('raw-loader!./maintemplate.html')),
  TestPage = require('./pages/testpage');

var AppControl = can.Control.extend({
  init : function(el, options){
    this.vm = new can.DefineMap();
    this.vm.title = 'My App';
    
    $(el).html(mainTemplate(this.vm));
    
    var pageContainer = $(el).find('#page-container');
    var page = $('<page></page>');
    pageContainer.append(page);
    new TestPage(pageContainer.find('page')[0]);
    
  }
});


new AppControl('#main');
