class Tree{
    constructor(x, y, width,height){

    var options={
        isStatic:true,
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    this.image=loadImage("sprites/tree.png")
    World.add(world,this.body);
    }

    display(){
        var treePos=this.body.position; 
        push();
        translate(treePos.x,treePos.y);
        imageMode(CENTER);
        image(this.image,0,0,-750,-750);
        pop();
        }

    }