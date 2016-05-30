class Game {
        private boat1 : Boat;
        
    constructor(){
        this.boat1 = new Boat();
        requestAnimationFrame(this.gameLoop.bind(this));    
    }
    
    private gameLoop(){
        this.boat1.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}