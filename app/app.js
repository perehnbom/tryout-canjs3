
require('can-control');
require('can-stache');

var can = require('can-util/namespace'),
  $ = require('can-jquery'),
  mainTemplate = can.stache(require('raw-loader!./maintemplate.html'));

var AppControl = can.Control.extend({
  init : function(el, options){
    $(el).html(mainTemplate({title: 'My App'}));
  }
});

new AppControl('#main');
