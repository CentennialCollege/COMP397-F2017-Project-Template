// IIFE - Immediately Invoked Function Expression
(function(){
  let stage:createjs.Stage;
  let canvas:any;
  let helloLabel:objects.Label;
  let clickButton:objects.Button;
  let assetManager:createjs.LoadQueue;

  let gameContainer:objects.Scene;

  let assetManifest = [
    {id: "clickMeButton", src:"../../Assets/images/clickMeButton.png"}
  ];

  function Init() {
    assetManager = new createjs.LoadQueue();
    assetManager.installPlugin(createjs.Sound);
    assetManager.on("complete", Start);
    assetManager.loadManifest(assetManifest);
  }

  function Start() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update() {
    stage.update();
  }

  function Main() {
    gameContainer = new objects.Scene();
    stage.addChild(gameContainer);

    helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
    gameContainer.addChild(helloLabel);

    clickButton = new objects.Button(assetManager, "clickMeButton", 320, 340, true);
    gameContainer.addChild(clickButton);

    clickButton.on("click", function() {
      helloLabel.TextString = "GoodBye Cruel World";
    });

  }

  window.onload = Init;

})();
