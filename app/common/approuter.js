require('can-control');
var can = require('can-util/namespace'),
  $ = require('can-jquery'),
  Route = require('route-parser');

var AppRouter = can.Control.extend({
  defaults : {
    routes : {}
  }
},{
  init : function(el,ev){
    this.initRoutes();
  },
  initRoutes : function(){
    initRoutesByPages(this);
    initRoutes(this);
  },
  openPage : function(Page, params){
    var pageContainer = this.element;

    pageContainer.find('page').remove();
    var page = $('<page></page>');
    pageContainer.append(page);
    var pageControl = new Page(pageContainer.find('page:last-child')[0], params);
    return pageControl.render();
  },

  openPageByHash : function(hash){
    hash = hash || window.location.hash;
    hash = hash.replace(LEADING_HASH_REGEX, '');

    var pageHit = findPageHitByHash(this, hash);
    if(pageHit){
      return this.openPage(pageHit.page, pageHit.params);
    }
    if(hash === "" && this.options.defaultPage){
      return this.openPage(this.options.defaultPage);
    }
    return false;
  },
  
  '{window} hashchange' : function(el,ev){
    if(!this.openPageByHash()){
      console.error('page could not be found for hash ' + window.location.hash);
    }
  }
})

var LEADING_HASH_REGEX = /^#!|#/gm;

function initRoutesByPages(router){
  var pages = router.options.pages;
  if(pages){
    pages.forEach(function(page){
      if(page.route){
        router.options.routes[page.route] = page;
      }
    })
  }
}

function initRoutes(router){
  router.compiledRoutes = [];
  for(var route in router.options.routes){
    router.compiledRoutes.push({
      route : new Route(route),
      page : router.options.routes[route]
    })
  }
}


function findPageHitByHash(router, hash){

  for(var i=0;i<router.compiledRoutes.length; i++){
    var compiledRoute = router.compiledRoutes[i];
    var match = compiledRoute.route.match(hash);
    if(match){
      return {
        page : compiledRoute.page,
        params : match
      }
    }
  }
}

module.exports = AppRouter;
