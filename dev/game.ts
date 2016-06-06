class Game {
        public player: Player;
        
        private plastic : Plastic;
        private Soup:Array<Plastic>= new Array <Plastic>();
        
        private posX: number;
        private posY: number;
        
    constructor(){
        this.player = new Player();
        
        requestAnimationFrame(this.gameLoop.bind(this));    
    }
    
    private gameLoop(){
        
        
        /*
        this.Soup[1].checkPlastic(this.Soup[2]);
        this.Soup[1].checkPlastic(this.Soup[3]);
        this.Soup[1].checkPlastic(this.Soup[4]);
        this.Soup[1].checkPlastic(this.Soup[0]);
        
        this.Soup[2].checkPlastic(this.Soup[1]);
        this.Soup[2].checkPlastic(this.Soup[3]);
        this.Soup[2].checkPlastic(this.Soup[4]);
        this.Soup[2].checkPlastic(this.Soup[0]);
        
        this.Soup[3].checkPlastic(this.Soup[1]);
        this.Soup[3].checkPlastic(this.Soup[2]);
        this.Soup[3].checkPlastic(this.Soup[4]);
        this.Soup[3].checkPlastic(this.Soup[0]);
        
        this.Soup[4].checkPlastic(this.Soup[1]);
        this.Soup[4].checkPlastic(this.Soup[2]);
        this.Soup[4].checkPlastic(this.Soup[3]);
        this.Soup[4].checkPlastic(this.Soup[0]);
        
        this.Soup[0].checkPlastic(this.Soup[1]);
        this.Soup[0].checkPlastic(this.Soup[2]);
        this.Soup[0].checkPlastic(this.Soup[3]);
        this.Soup[0].checkPlastic(this.Soup[4]);
        */
        this.player.boat1.move();
          
            for(let i = 0 ; i < this.player.Soup.length; i++){
            var soup = this.player.Soup[i];
            for(let j = 0 ; j < this.player.Soup.length; j++){
                var othersoup = this.player.Soup[j];
                if(soup != othersoup) {
                    soup.checkPlastic(othersoup);
                }
            }
        }
        
        for (var i:number = 0; i < 5 ; i++){
            this.player.Soup[i].move();
            this.player.Soup[i].checkBoat(this.player.boat1, this.player);
            }
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}