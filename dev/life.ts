/**
 * Life
 */
class Life {
    private div:HTMLElement;
    private container: Element;
    private amount:number;
    
    constructor(amount:number) {
        this.amount = amount;
        for (let i = 0; i < this.amount; i++){
            this.div = document.createElement("life");
            this.container = document.getElementsByTagName("container")[0];
            document.body.appendChild(this.div);
        }
        
    }
}