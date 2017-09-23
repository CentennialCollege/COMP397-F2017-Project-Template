var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Start(assetManager) {
            var _this = _super.call(this) || this;
            _this._assetManager = assetManager;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            this._helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
            this._clickButton = new objects.Button(this._assetManager, "clickMeButton", 320, 340, true);
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Main = function () {
            this.addChild(this._helloLabel);
            this.addChild(this._clickButton);
            this._clickButton.on("click", function () {
                this._helloLabel.TextString = "GoodBye Cruel World";
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map