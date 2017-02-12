 "use strict";
  angular.module('mdr')
  .directive('playCanvas', [ 'runLaderService', function (loaderSvc) {

       return {
           restrict : 'E',
           replace : true,
           scope : {
             gwidth: '=',
             gheight: '=',
           },
           template: "<canvas class='runCanvas' width='200' height='200'></canvas>",
           link: function (scope, element, attribute) {
             console.log('loaded');
               var w, h, max, spriteSheet;
               drawGame();
               element[0].width = scope.gwidth;
               element[0].height = scope.gheight;
               w = scope.gwidth;
               h = scope.gheight;
               function drawGame() {
                   //drawing the game canvas from scratch here
                   if (scope.stage) {
                       scope.stage.autoClear = true;
                       scope.stage.removeAllChildren();
                       scope.stage.update();
                   } else {
                       scope.stage = new createjs.Stage(element[0]);
                   }

                   loaderSvc.getLoader().addEventListener("complete", handleComplete);
                   loaderSvc.loadAssets();

               }
               function handleComplete() {
                   spriteSheet = new createjs.SpriteSheet({
                      framerate: 10,
                      "images": [loaderSvc.getResult("max")],
                      "frames": {"width": 150, "height": 210, "count": 4},
                      // define two animations, run (loops, 1.5x speed) and jump (returns to run):
                      "animations": {
                        frames: [0, 3],
                        speed: 0.5
                      }
                   });
                  max = new createjs.Sprite(spriteSheet, "hello");
                  max.y = (scope.gheight * 0.2);
                    console.log(scope.gheight);
                  console.log( max.y);
                  max.x = scope.gwidth * 0.1;;
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
