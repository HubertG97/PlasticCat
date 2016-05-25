class Boat {
    
    public div : HTMLElement;
    
    private width:number = 50;
    private height:number = 50;
    
    private posX:number;
    private posY:number;
    
    private upKey : number;
    private downKey : number;
    private leftKey : number;
    private rightKey : number;
    
    private leftSpeed : number = 0;
    private rightSpeed : number = 0;
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    
    private rotateLeftKey : number;
    private rotateRightKey : number;
    
    private rotation: number = 0;
    
    
    
    constructor(upKey:number, downKey:number, leftKey : number, rightKey: number, rotateLeftKey : number, rotateRightKey : number){
        this.div = document.createElement("boat");
        document.body.appendChild(this.div);
        
        this.posX = window.innerWidth / 2;
        this.posY = window.innerHeight / 2;
        
        // keys kunnen verschillend zijn voor elke instance van charmander
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.rotateLeftKey = rotateLeftKey;
        this.rotateRightKey = rotateRightKey;
        
        // keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    
    public onKeyDown(event:KeyboardEvent) : void {
        switch (event.keyCode){
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
    }
    
    public onKeyUp(event:KeyboardEvent):void{
        switch (event.keyCode){
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
    }
    
    public move() : void {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)  rotate("+this.rotation+"deg)";
        
    }
    
}