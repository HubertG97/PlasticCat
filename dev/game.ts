class Game {
    
    constructor(){
        
    }
    
    private Gameloop(){
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}