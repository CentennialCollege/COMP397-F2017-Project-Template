// IIFE - Immediately Invoked Function Expression
(function () {
    var stage;
    var canvas;
    var helloLabel;
    var goodByeLabel;
    function Start() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation += 5;
        goodByeLabel.rotation -= 5;
        stage.update();
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        goodByeLabel = new objects.Label("Good Bye!", "40px", "Consolas", "#FF0000", 320, 240, true);
        stage.addChild(goodByeLabel);
    }
    window.onload = Start;
})();
//# sourceMappingURL=game.js.map