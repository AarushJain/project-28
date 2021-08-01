class Mango{
    constructor(x, y, radius){

    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }
 
    this.image=loadImage("sprites/mango.png")
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    World.add(world, this.body);
    }
    display(){
        var treePos=this.body.position; 
        push();
        translate(treePos.x,treePos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
        }

    }