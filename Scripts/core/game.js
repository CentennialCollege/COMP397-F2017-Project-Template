// IIFE - Immediately Invoked Function Expression
(function () {
    var stage;
    var canvas;
    var helloLabel;
    var clickButton;
    function Start() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
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
        helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickButton = new objects.Button("../../Assets/images/clickMeButton.png", 320, 340, true);
        stage.addChild(clickButton);
    }
    window.onload = Start;
})();
//# sourceMappingURL=game.js.map