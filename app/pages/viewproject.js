var can = require('can-util/namespace'),
  PageControl = require('../common/pagecontrol'),
  domData = require("can-util/dom/data/data"),
  $ = require('can-jquery'),
  Project = require('../models/project'),
  Item = require('../models/item');

var ProjectPage = PageControl.extend({
  route : "viewproject"
},{
  view : can.stache(require('raw-loader!./viewproject.html')),

  getData : function(){
    return {
        project : Project.get(1)
    }
  },
  preRender : function(vm){
    console.log(vm.project);    
  },
  '.item a#change-title click' : function(el,ev){
    ev.stop();
    var item = el.closest('.item').domData('model');
    item.title = "New title";
    item.save();
  },
  '.item a#delete click' : function(el,ev){
    ev.stop();
    var item = el.closest('.item').domData('model');
    item.destroy();
  }

});


module.exports = ProjectPage;
