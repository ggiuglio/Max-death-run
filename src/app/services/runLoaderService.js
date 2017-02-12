(function() {
  'use strict';

  angular.module('mdr')
  .service('runLaderService', runLaderService)

  function runLaderService () {
   var manifest = [
       {src: "max_run_new.png", id: "max"}
      //  {src: "sky.png", id: "sky"},
      //  {src: "ground.png", id: "ground"},
      //  {src: "hill1.png", id: "hill"},
      //  {src: "hill2.png", id: "hill2"}
   ];
   var loader = new createjs.LoadQueue(true);

   this.getResult = function (asset) {
       return loader.getResult(asset);
   };
   this.getLoader = function () {
       return loader;
   };
   this.loadAssets = function () {
       loader.loadManifest(manifest, true, "assets/sprites/");
   };
  }

})();
