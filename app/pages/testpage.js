var can = require('can-util/namespace'),
  PageControl = require('../common/pagecontrol'),
  domData = require("can-util/dom/data/data"),
  $ = require('can-jquery'),
  Item = require('../models/item'),
  itemConnection = require('../models/itemconnection');

var TestPage = PageControl.extend({
  route : "testpage"
},{
  view : can.stache(require('raw-loader!./testpage.html')),

  getData : function(){
    return {
      items : itemConnection.getList()
    }
  },
  '.item a#change-title click' : function(el,ev){
    ev.stop();
    var item = el.closest('.item').domData('model');
    item.title = "New title";
  }
});

module.exports = TestPage;
