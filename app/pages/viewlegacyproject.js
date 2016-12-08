var can = require('can-util/namespace'),
  PageControl = require('../common/pagecontrol'),
  domData = require("can-util/dom/data/data"),
  $ = require('can-jquery'),
  LegacyProject = require('../models/legacyprojectmodel')

var ProjectPage = PageControl.extend({
  route : "viewlegacyproject"
},{
  view : can.stache(require('raw-loader!./viewlegacyproject.html')),

  getData : function(){
    return {
        project : LegacyProject.findOne(1),
        manuallyDefinedProject : LegacyProject.getManuallyDefinedProject()
    }
  },
  preRender : function(vm){
    console.log(vm.manuallyDefinedProject)
  },

  '.item a#change-title click' : function(el,ev){
    ev.stop();
    var item = el.closest('.item').domData('model');
    item.attr('title', 'New Title');
    item.save();
  },
  '.item a#delete click' : function(el,ev){
    ev.stop();
    var item = el.closest('.item').domData('model');
    item.destroy();
  }

});


module.exports = ProjectPage;
