// IIFE - Immediately Invoked Function Expression
(function(){
  let stage:createjs.Stage;
  let canvas:any;
  let helloLabel:createjs.Text;

  function Start() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update() {
    helloLabel.rotation += 5;
    stage.update();
  }

  function Main() {
    console.log("Game Started...");

    helloLabel = new createjs.Text("Hello, World!", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
  }

  window.onload = Start;

})();
