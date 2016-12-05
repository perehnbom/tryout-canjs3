require('can-control');
require("can-define/map/map");
var can = require('can-util/namespace'),
  _ = require("lodash");

var PageControl = can.Control.extend({

  render : function(){
    var self = this;
    return this._preRenderPhase().then(function(){
      return self._postRenderPhase();
    })
  },

  getData : function(){
    return {
    }
  },
  preRender : function(){
  },
  postRender : function(){
  },

  _preRenderPhase : function(){
    var controller = this;

    controller.vm = controller.element.viewModel();
    Object.assign(controller.vm, controller.options);
    return resolveMap(controller.getData(controller.options)).then(function(data){
      Object.assign(controller.vm, data);
      return controller.preRender(controller.vm);
    });
  },

  _postRenderPhase : function(){
    var controller = this;

    controller.element.html(controller.view(controller.vm));
    return Promise.resolve().then(function(){
      return controller.postRender(controller.vm);
    }).then(function(){
      controller.element.addClass('controller');
      controller.element.trigger('rendered');
    })
  }
});

function resolveMap(promiseMap){
		var promiseArray = [];
		var keyArray = [];

		_.map(promiseMap, function(promise, key) {
			promiseArray.push(promise);
			keyArray.push(key);
		});

		return Promise.all(promiseArray).then(function(resolvedPromiseArray){
      var resolvedMap = {};
			_.each(keyArray, function(key,index){
				resolvedMap[key] = resolvedPromiseArray[index];
			});
			return resolvedMap;
		})
}


module.exports = PageControl;
