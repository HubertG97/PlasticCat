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
    Boat.prototype.emergencyBreak = function () {
        console.log("emergency");
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.upSpeed = 0;
        this.downSpeed = 0;
    };
    Boat.prototype.move = function () {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Boat.prototype.getX = function () {
        return this.posX;
    };
    Boat.prototype.getY = function () {
        return this.posY;
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
                this.update();
                break;
            case this.rotateRightKey:
                this.rotation = this.rotation + 20;
                this.update();
                break;
        }
    };
    Cannon.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.rotateLeftKey:
                this.update();
                break;
            case this.rotateRightKey:
                this.update();
                break;
        }
    };
    Cannon.prototype.update = function () {
        console.log("update");
        this.draw();
    };
    Cannon.prototype.draw = function () {
        console.log("draw");
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(" + this.rotation + "deg)";
    };
    return Cannon;
}());
var Game = (function () {
    function Game() {
        this.Soup = new Array();
        this.player = new Player();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.player.boat1.move();
        for (var i_1 = 0; i_1 < this.player.Soup.length; i_1++) {
            var soup = this.player.Soup[i_1];
            for (var j = 0; j < this.player.Soup.length; j++) {
                var othersoup = this.player.Soup[j];
                if (soup != othersoup) {
                    soup.checkPlastic(othersoup);
                }
            }
        }
        for (var i = 0; i < 5; i++) {
            this.player.Soup[i].move();
            this.player.Soup[i].checkBoat(this.player.boat1, this.player);
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
var Life = (function () {
    function Life(amount) {
        this.amount = amount;
        for (var i = 0; i < this.amount; i++) {
            this.div = document.createElement("life");
            this.container = document.getElementsByTagName("container")[0];
            document.body.appendChild(this.div);
        }
    }
    return Life;
}());
window.addEventListener("load", function () {
    new Game();
});
var Plastic = (function () {
    function Plastic(posX, posY) {
        this.div = document.createElement("Plastic");
        document.body.appendChild(this.div);
        this.posX = posX;
        this.posY = posY;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
        this.move();
    }
    Plastic.prototype.checkBoat = function (boat, player) {
        this.player = player;
        if (this.posX + 50 >= boat.getX() && this.posX <= boat.getX() + 50 && this.posY + 50 >= boat.getY() && this.posY <= boat.getY() + 50) {
            if (this.posX + 50 >= boat.getX() || this.posX <= boat.getX() + 50) {
                this.speedX *= -1;
                console.log("De plastic raakt de Plastic aan!");
                this.randomSpawn();
            }
            if (this.posY + 50 >= boat.getY() || this.posY <= boat.getY() + 50) {
                this.speedY *= -1;
                console.log("!!!!!!!!");
                this.randomSpawn();
            }
        }
    };
    Plastic.prototype.checkPlastic = function (plastic) {
        if (this.posX + 50 >= plastic.getX() && this.posX <= plastic.getX() + 50 && this.posY + 50 >= plastic.getY() && this.posY <= plastic.getY() + 50) {
            if (this.posX + 50 >= plastic.getX() || this.posX <= plastic.getX() + 50) {
                console.log("De plastic raakt de Plastic aan!");
                this.speedX *= -1;
            }
            if (this.posY + 50 >= plastic.getY() || this.posY <= plastic.getY() + 50) {
                this.speedY *= -1;
                console.log("!!!!!!!!");
            }
        }
    };
    Plastic.prototype.move = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        if (this.posX + 40 > window.innerWidth || this.posX < 0) {
            this.speedX *= -1;
        }
        if (this.posY + 40 > window.innerHeight || this.posY < 0) {
            this.speedY *= -1;
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Plastic.prototype.getX = function () {
        return this.posX;
    };
    Plastic.prototype.getY = function () {
        return this.posY;
    };
    Plastic.prototype.randomSpawn = function () {
        this.posX = Math.ceil(Math.random() * innerWidth);
        this.posY = Math.ceil(Math.random() * innerHeight);
        if (this.posX + 50 >= this.player.boat1.getX() && this.posX <= this.player.boat1.getX() + 50 && this.posY + 50 >= this.player.boat1.getY() && this.posY <= this.player.boat1.getY() + 50) {
            console.log("De plastic spawnt random in de boot!");
            this.posX = Math.ceil(Math.random() * innerWidth);
            this.posY = Math.ceil(Math.random() * innerHeight);
            this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
            if (this.posX + 50 >= this.player.boat1.getX() && this.posX <= this.player.boat1.getX() + 50 && this.posY + 50 >= this.player.boat1.getY() && this.posY <= this.player.boat1.getY() + 50) {
                console.log("De plastic spawnt random in de boot!");
                this.posX = Math.ceil(Math.random() * innerWidth);
                this.posY = Math.ceil(Math.random() * innerHeight);
                this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
                if (this.posX + 50 >= this.player.boat1.getX() && this.posX <= this.player.boat1.getX() + 50 && this.posY + 50 >= this.player.boat1.getY() && this.posY <= this.player.boat1.getY() + 50) {
                    console.log("De plastic spawnt random in de boot!");
                    this.posX = Math.ceil(Math.random() * innerWidth);
                    this.posY = Math.ceil(Math.random() * innerHeight);
                    this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
                    if (this.posX + 50 >= this.player.boat1.getX() && this.posX <= this.player.boat1.getX() + 50 && this.posY + 50 >= this.player.boat1.getY() && this.posY <= this.player.boat1.getY() + 50) {
                        console.log("De plastic spawnt random in de boot!");
                        this.posX = Math.ceil(Math.random() * innerWidth);
                        this.posY = Math.ceil(Math.random() * innerHeight);
                        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
                    }
                    else {
                    }
                }
                else {
                }
            }
            else {
            }
        }
        else {
        }
    };
    return Plastic;
}());
var Player = (function () {
    function Player() {
        this.Soup = new Array();
        this.lifes = 3;
        this.score = 0;
        this.boat1 = new Boat();
        this.life = new Life();
        for (var i = 0; i < 5; i++) {
            this.posX = Math.ceil(Math.random() * innerWidth);
            this.posY = Math.ceil(Math.random() * innerHeight);
            if (this.posX + 50 >= this.boat1.getX() && this.posX <= this.boat1.getX() + 50 && this.posY + 50 >= this.boat1.getY() && this.posY <= this.boat1.getY() + 50) {
                console.log("De plastic spawnt random in de boot!");
                this.posX = Math.ceil(Math.random() * innerWidth);
                this.posY = Math.ceil(Math.random() * innerHeight);
                if (this.posX + 50 >= this.boat1.getX() && this.posX <= this.boat1.getX() + 50 && this.posY + 50 >= this.boat1.getY() && this.posY <= this.boat1.getY() + 50) {
                    console.log("De plastic spawnt random in de boot!");
                    this.posX = Math.ceil(Math.random() * innerWidth);
                    this.posY = Math.ceil(Math.random() * innerHeight);
                    if (this.posX + 50 >= this.boat1.getX() && this.posX <= this.boat1.getX() + 50 && this.posY + 50 >= this.boat1.getY() && this.posY <= this.boat1.getY() + 50) {
                        console.log("De plastic spawnt random in de boot!");
                        this.posX = Math.ceil(Math.random() * innerWidth);
                        this.posY = Math.ceil(Math.random() * innerHeight);
                        if (this.posX + 50 >= this.boat1.getX() && this.posX <= this.boat1.getX() + 50 && this.posY + 50 >= this.boat1.getY() && this.posY <= this.boat1.getY() + 50) {
                            console.log("De plastic spawnt random in de boot!");
                            this.posX = Math.ceil(Math.random() * innerWidth);
                            this.posY = Math.ceil(Math.random() * innerHeight);
                        }
                        else {
                            this.plastic = new Plastic(this.posX, this.posY);
                            this.Soup[i] = this.plastic;
                        }
                    }
                    else {
                        this.plastic = new Plastic(this.posX, this.posY);
                        this.Soup[i] = this.plastic;
                    }
                }
                else {
                    this.plastic = new Plastic(this.posX, this.posY);
                    this.Soup[i] = this.plastic;
                }
            }
            else {
                this.plastic = new Plastic(this.posX, this.posY);
                this.Soup[i] = this.plastic;
            }
        }
    }
    Player.prototype.looseLife = function () {
        this.lifes = this.lifes - 1;
        this.container = document.getElementsByTagName("container")[0];
        this.lifeImage = document.getElementsByTagName("life")[this.lifes];
    };
    return Player;
}());
//# sourceMappingURL=main.js.map