
require('can-control');
require('can-stache');
require("can-define/map/map");
require("can-util/dom/data/data");
require('can-jquery/legacy');
require('./common/extensions');

var can = require('can-util/namespace'),
  $ = require('can-jquery'),
  mainTemplate = can.stache(require('raw-loader!./maintemplate.html')),
  AppRouter = require('./common/approuter'),
  pages = require('./pages/pages'),
  TestPage = require('./pages/testpage');

var AppControl = can.Control.extend({
  init : function(el, options){
    this.vm = el.viewModel();  
    this.vm.title = 'My App';

    el.html(mainTemplate(this.vm));

    this.appRouter = new AppRouter('#page-container', {
      routes : {
        'page1' : TestPage,
        'viewitem/:id' : TestPage
      },
      pages : pages,
      defaultPage : TestPage
    });

    this.appRouter.openDefaultPage();
  }
});


new AppControl('#main');
