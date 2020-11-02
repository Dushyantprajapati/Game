class Alex1{
    constructor(x,y,width,height){
        var options={
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    }
    
}