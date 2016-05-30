class Cannon {
    
    private boat:Boat;
    private div : HTMLElement;
    
    private rotateLeftKey : number;
    private rotateRightKey : number;
    
    public x:number;
    public y:number;
    
    private rotation: number = 0;
    
    constructor(b:Boat, x:number, y:number){
        this.boat = b;
        this.div = document.createElement("cannon");
        this.boat.div.appendChild(this.div);
        this.rotateLeftKey = 37;
        this.rotateRightKey = 39;
        this.x = x;
        this.y = y;
        this.update();
        
        // keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    
    public onKeyDown(event:KeyboardEvent) : void {
        switch (event.keyCode){
            case this.rotateLeftKey:          
            this.rotation = this.rotation - 20;
            this.div.style.transform = "rotate("+this.rotation+"deg)";
            break;
            case this.rotateRightKey:
            this.rotation = this.rotation + 20;
            this.div.style.transform = "rotate("+this.rotation+"deg)";
            break;
        }
    }
    
    public onKeyUp(event:KeyboardEvent):void{
        switch (event.keyCode){
            case this.rotateLeftKey:
            break;
            case this.rotateRightKey:
            break;
        }
    }
    
     public update():void {
         console.log("update");
        // vraag: hoe kan het wiel weten waar de auto is?
        this.draw();
    }
    
    public draw() : void {
        console.log("draw");
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}