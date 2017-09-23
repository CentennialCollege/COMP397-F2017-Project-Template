// IIFE - Immediately Invoked Function Expression
(function () {
    var stage;
    var canvas;
    var assetManager;
    var assetManifest = [
        { id: "clickMeButton", src: "../../Assets/images/clickMeButton.png" }
    ];
    var currentScene;
    var currentState;
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
        currentState = config.START;
        Main();
    }
    function Update() {
        currentScene.Update();
        stage.update();
    }
    function Main() {
        switch (currentState) {
            case config.START:
                currentScene = new scenes.Start(assetManager);
                break;
            case config.PLAY:
                //currentScene = new scenes.Play(assetManager);
                break;
            case config.END:
                //currentScene = new scenes.End(assetManager);
                break;
        }
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map