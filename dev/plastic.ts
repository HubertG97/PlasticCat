class Plastic {
    public div:HTMLElement;
    public player: Player;
    private boat:Boat;
    
    private posX : number;
    private posY : number;
    
    private speedX:number;
    private speedY:number;
    
    
    constructor(posX : number, posY: number){
        this.div = document.createElement("Plastic");
        document.body.appendChild(this.div);
        this.posX = posX;
        this.posY = posY;
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
        this.move();
        
    }
    
    public checkBoat(boat:Boat, player:Player) {
        this.player = player; 
        if (this.posX+220 >= boat.getX() && this.posX <= boat.getX() + 220 && this.posY+100 >= boat.getY() && this.posY <= boat.getY()+100) { 
           if (this.posX+220 >= boat.getX() || this.posX <= boat.getX() + 220) { 
           this.speedX *= -1;
           console.log("De plastic raakt de Plastic aan!");
           this.randomSpawn();
        }
         if (this.posY+100 >= boat.getY() || this.posY <= boat.getY()+100) {
           this.speedY *= -1;
           console.log("!!!!!!!!");
           this.randomSpawn();
           
         }
        }
        
    }    
    
    public checkPlastic(plastic:Plastic) {
         
        
        if (this.posX+50 >= plastic.getX() && this.posX <= plastic.getX() + 50 && this.posY+50 >= plastic.getY() && this.posY <= plastic.getY()+50) { 
           if (this.posX+50 >= plastic.getX() || this.posX <= plastic.getX() + 50) { 
           console.log("De plastic raakt de Plastic aan!");
           this.speedX *= -1;
        }
         if (this.posY+50 >= plastic.getY() || this.posY <= plastic.getY()+50) {
           this.speedY *= -1;
           console.log("!!!!!!!!");
         }
           
        }

    }  
    
    public move() : void {
        this.posX += this.speedX;
        this.posY += this.speedY;
        
        // als we buiten beeld gaan dan de snelheid omdraaien
        if( this.posX + 40 > window.innerWidth || this.posX < 0) { 
            this.speedX *= -1;
              
        }
        
        if( this.posY + 40 > window.innerHeight || this.posY < 0) { 
            this.speedY *= -1;
        }
        
        // transform gebruiken om de positie op het scherm aan te passen
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
    
    public getX():number {
        return this.posX;
    }
    
    public getY():number {
        return this.posY;
    }
    
    public randomSpawn():void {
            this.posX = Math.ceil(Math.random() * innerWidth);
                this.posY = Math.ceil(Math.random() * innerHeight);
                    if (this.posX+50 >= this.player.boat1.getX() && this.posX <= this.player.boat1.getX() + 50 && this.posY+50 >= this.player.boat1.getY() && this.posY <= this.player.boat1.getY()+50) { 
                        console.log("De plastic spawnt random in de boot!");
                        this.posX = Math.ceil(Math.random() * innerWidth);
                        this.posY = Math.ceil(Math.random() * innerHeight);
                        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
                            if (this.posX+50 >= this.player.boat1.getX() && this.posX <= this.player.boat1.getX() + 50 && this.posY+50 >= this.player.boat1.getY() && this.posY <= this.player.boat1.getY()+50) { 
                            console.log("De plastic spawnt random in de boot!");
                            this.posX = Math.ceil(Math.random() * innerWidth);
                            this.posY = Math.ceil(Math.random() * innerHeight);
                            this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
                                if (this.posX+50 >= this.player.boat1.getX() && this.posX <= this.player.boat1.getX() + 50 && this.posY+50 >= this.player.boat1.getY() && this.posY <= this.player.boat1.getY()+50) { 
                                    console.log("De plastic spawnt random in de boot!");
                                    this.posX = Math.ceil(Math.random() * innerWidth);
                                    this.posY = Math.ceil(Math.random() * innerHeight);
                                    this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
                                    if (this.posX+50 >= this.player.boat1.getX() && this.posX <= this.player.boat1.getX() + 50 && this.posY+50 >= this.player.boat1.getY() && this.posY <= this.player.boat1.getY()+50) { 
                                        console.log("De plastic spawnt random in de boot!");
                                        this.posX = Math.ceil(Math.random() * innerWidth);
                                        this.posY = Math.ceil(Math.random() * innerHeight);
                                        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
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
    }
}