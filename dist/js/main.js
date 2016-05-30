var Boat = (function () {
    function Boat() {
        this.width = 50;
        this.height = 50;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.rotation = 0;
        this.div = document.createElement("boat");
        document.body.appendChild(this.div);
        this.cannon = new Cannon(this, -125, -150);
        this.posX = window.innerWidth / 2;
        this.posY = window.innerHeight / 2;
        this.upKey = 87;
        this.downKey = 83;
        this.leftKey = 65;
        this.rightKey = 68;
        this.rotateLeftKey = 37;
        this.rotateRightKey = 39;
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
        }
    };
    Boat.prototype.move = function () {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Boat;
}());
var Cannon = (function () {
    function Cannon(b, x, y) {
        this.rotation = 0;
        this.boat = b;
        this.div = document.createElement("cannon");
        this.boat.div.appendChild(this.div);
        this.rotateLeftKey = 37;
        this.rotateRightKey = 39;
        this.x = x;
        this.y = y;
        this.update();
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Cannon.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.rotateLeftKey:
                this.rotation = this.rotation - 20;
                this.div.style.transform = "rotate(" + this.rotation + "deg)";
                break;
            case this.rotateRightKey:
                this.rotation = this.rotation + 20;
                this.div.style.transform = "rotate(" + this.rotation + "deg)";
                break;
        }
    };
    Cannon.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.rotateLeftKey:
                break;
            case this.rotateRightKey:
                break;
        }
    };
    Cannon.prototype.update = function () {
        console.log("update");
        this.draw();
    };
    Cannon.prototype.draw = function () {
        console.log("draw");
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Cannon;
}());
var Game = (function () {
    function Game() {
        this.boat1 = new Boat();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.boat1.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map