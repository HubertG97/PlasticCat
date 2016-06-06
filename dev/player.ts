class Player {
    private lifeImage: Element;
    private container: Element;
    public div : HTMLElement;
    
    public boat1: Boat;
    private plastic : Plastic;
    public Soup:Array<Plastic>= new Array <Plastic>();
    private life:Life;
    
    private lifes : number = 3;
    private score : number = 0;
    
    private posX: number;
    private posY: number;
    
    constructor(){
       
        this.boat1 = new Boat();
        this.life = new Life ();
        
   
          
            for (var i:number = 0; i < 5 ; i++){
                this.posX = Math.ceil(Math.random() * innerWidth);
                this.posY = Math.ceil(Math.random() * innerHeight);
                    if (this.posX+50 >= this.boat1.getX() && this.posX <= this.boat1.getX() + 50 && this.posY+50 >= this.boat1.getY() && this.posY <= this.boat1.getY()+50) { 
                        console.log("De plastic spawnt random in de boot!");
                        this.posX = Math.ceil(Math.random() * innerWidth);
                        this.posY = Math.ceil(Math.random() * innerHeight);
                            if (this.posX+50 >= this.boat1.getX() && this.posX <= this.boat1.getX() + 50 && this.posY+50 >= this.boat1.getY() && this.posY <= this.boat1.getY()+50) { 
                            console.log("De plastic spawnt random in de boot!");
                            this.posX = Math.ceil(Math.random() * innerWidth);
                            this.posY = Math.ceil(Math.random() * innerHeight);
                                if (this.posX+50 >= this.boat1.getX() && this.posX <= this.boat1.getX() + 50 && this.posY+50 >= this.boat1.getY() && this.posY <= this.boat1.getY()+50) { 
                                    console.log("De plastic spawnt random in de boot!");
                                    this.posX = Math.ceil(Math.random() * innerWidth);
                                    this.posY = Math.ceil(Math.random() * innerHeight);
                                    if (this.posX+50 >= this.boat1.getX() && this.posX <= this.boat1.getX() + 50 && this.posY+50 >= this.boat1.getY() && this.posY <= this.boat1.getY()+50) { 
                                        console.log("De plastic spawnt random in de boot!");
                                        this.posX = Math.ceil(Math.random() * innerWidth);
                                        this.posY = Math.ceil(Math.random() * innerHeight);
                                    }
                                    else {
                                        this.plastic = new Plastic(this.posX, this.posY);
                                        this.Soup[i]= this.plastic;
                                    }
                                }
                                else {
                                    this.plastic = new Plastic(this.posX, this.posY);
                                    this.Soup[i]= this.plastic;
                                }
                            }
                            else {
                                this.plastic = new Plastic(this.posX, this.posY);
                                this.Soup[i]= this.plastic;
                            }
                    }
                    else {
                        this.plastic = new Plastic(this.posX, this.posY);
                        this.Soup[i]= this.plastic;
                         }
            }
        } 
        public looseLife():void {
            this.lifes = this.lifes -1;
            this.container = document.getElementsByTagName("container")[0];
            this.lifeImage = document.getElementsByTagName("life")[this.lifes];
            
        }
}