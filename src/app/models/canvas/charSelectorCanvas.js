 "use strict";
  angular.module('mdr')
  .directive('charSelectorCanvas', [ 'selectorLoaderService', function (loaderSvc) {

       return {
           restrict : 'EAC',
           replace : true,
           scope :{
           },
           template: "<canvas class='homeCanvas' width='140' height='240'></canvas>",
           link: function (scope, element, attribute) {
             console.log('loaded');
               var w, h, max, spriteSheet;
               drawGame();
               function drawGame() {
                   //drawing the game canvas from scratch here
                   if (scope.stage) {
                       scope.stage.autoClear = true;
                       scope.stage.removeAllChildren();
                       scope.stage.update();
                   } else {
                       scope.stage = new createjs.Stage(element[0]);
                   }
                   w = scope.stage.canvas.width;
                   h = scope.stage.canvas.height;
                   loaderSvc.getLoader().addEventListener("complete", handleComplete);
                   loaderSvc.loadAssets();

               }
               function handleComplete() {

                   spriteSheet = new createjs.SpriteSheet({
                      framerate: 10,
                      "images": [loaderSvc.getResult("max")],
                      "frames": {"width": 135, "height": 220, "count": 4},
                      // define two animations, run (loops, 1.5x speed) and jump (returns to run):
                      "animations": {
                        frames: [0, 3],
                        speed: 0.5
                      }
                   });
                  max = new createjs.Sprite(spriteSheet, "hello");
                  max.y = 1;
                  scope.stage.addChild(max);
                   createjs.Ticker.timingMode = createjs.Ticker.RAF;
                   createjs.Ticker.addEventListener("tick", tick);
               }

               function handleJumpStart() {

               }

               function tick(event) {
                  var deltaS = event.delta / 1000;

                  scope.stage.update(event);
               }
           }
       }
   }]);
