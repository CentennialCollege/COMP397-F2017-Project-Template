module scenes {
  export class Start extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _assetManager:createjs.LoadQueue;

    private _helloLabel:objects.Label;
    private _clickButton:objects.Button;

    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(assetManager:createjs.LoadQueue) {
      super();
      this._assetManager = assetManager;
    }
    // PRIVATE METHODS

    // PUBLIC METHODS
    public Start():void {
      this._helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
      this._clickButton = new objects.Button(this._assetManager, "clickMeButton", 320, 340, true);
    }

    public Update():void {

    }

    public Main():void {

      this.addChild(this._helloLabel);


      this.addChild(this._clickButton);

      this._clickButton.on("click", function() {
        this._helloLabel.TextString = "GoodBye Cruel World";
      });
    }
  }
}
