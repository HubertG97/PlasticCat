var Boat = (function () {
    function Boat(upKey, downKey, leftKey, rightKey, rotateLeftKey, rotateRightKey) {
        this.width = 50;
        this.height = 50;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.rotation = 0;
        this.div = document.createElement("boat");
        document.body.appendChild(this.div);
        this.posX = window.innerWidth / 2;
        this.posY = window.innerHeight / 2;
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.rotateLeftKey = rotateLeftKey;
        this.rotateRightKey = rotateRightKey;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Boat.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 5;
                break;
            case this.downKey:
                this.downSpeed = 5;
                break;
            case this.leftKey:
                this.leftSpeed = 5;
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                break;
            case this.rotateLeftKey:
                this.rotation = 5;
                break;
            case this.rotateRightKey:
                this.rotation = 5;
                break;
        }
    };
    Boat.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 0;
                break;
            case this.downKey:
                this.downSpeed = 0;
                break;
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
            case this.rotateLeftKey:
                this.rotation = 0;
                break;
            case this.rotateRightKey:
                this.rotation = 0;
                break;
        }
    };
    Boat.prototype.move = function () {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)  rotate(" + this.rotation + "deg)";
    };
    return Boat;
}());
var Game = (function () {
    function Game() {
    }
    Game.prototype.Gameloop = function () {
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map