
require('can-control');
require('can-stache');
require("can-define/map/map");
require("can-util/dom/data/data");
require('can-jquery/legacy');
require('./common/extensions');

/*

Check in can connect:
base-map.js
super-map.js
all.js
*/

var can = require('can-util/namespace'),
  $ = require('can-jquery'),
  mainTemplate = can.stache(require('raw-loader!./maintemplate.html')),
  AppRouter = require('./common/approuter'),
  pages = require('./pages/pages'),
  DefaultStartPage = require('./pages/viewproject');

var AppControl = can.Control.extend({
  init : function(el, options){
    this.vm = el.viewModel();
    this.vm.title = 'My App';

    el.html(mainTemplate(this.vm));

    this.appRouter = new AppRouter('#page-container', {
      routes : {
        'testpage' : DefaultStartPage
      },
      pages : pages,
      defaultPage : DefaultStartPage
    });

    this.appRouter.openPageByHash();
  }
});


new AppControl('#main');
