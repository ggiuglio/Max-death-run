 "use strict";
  angular.module('mdr')
  .directive('charSelectorCanvas', [ 'loaderService', function (loaderSvc) {

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
                  //  sky = new Sky({width:w, height:h});
                  //  sky.addToStage(scope.stage);
                  //  ground = new Ground({width:w, height:h});
                  //  hill = new Hill({width:w, height:h, scaleFactor: 4, assetName: 'hill', groundHeight: ground.getHeight()});
                  //  hill.setAlpha(0.5);
                  //  hill.addToStage(scope.stage);
                  //  hill2 = new Hill({width:w, height:h, scaleFactor: 3, assetName: 'hill2', groundHeight: ground.getHeight()});
                  //  hill2.addToStage(scope.stage);
                  //  ground.addToStage(scope.stage);
                  //  grant = new Character({characterAssetName: 'grant', y: 34})
                  //  grant.addToStage(scope.stage);
                   //scope.stage.addEventListener("stagemousedown", handleJumpStart);
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
                  //  grant.playAnimation("jump");
               }

               function tick(event) {
                    var deltaS = event.delta / 1000;
                  //  var position = grant.getX() + 150 * deltaS;
                  //  grant.setX((position >= w + grant.getWidth()) ? -grant.getWidth() : position);
                  //  ground.setX((ground.getX() - deltaS * 150) % ground.getTileWidth());
                  //  hill.move(deltaS * -30, 0);
                  //  if (hill.getX() + hill.getImageWidth() * hill.getScaleX() <= 0) {
                  //      hill.setX(w);
                  //  }
                  //  hill2.move(deltaS * -45, 0);
                  //  if (hill2.getX() + hill2.getImageWidth() * hill2.getScaleX() <= 0) {
                  //      hill2.setX(w);
                  //  }
                   scope.stage.update(event);
               }
           }
       }
   }]);
