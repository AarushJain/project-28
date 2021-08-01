const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var stone;
var tree;
var mango1, mango2, mango3, mango4, mango5;
var rope; 


function preload()
{
	boyImg=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1450, 700);
	engine = Engine.create();
	world = engine.world;

	boy=createSprite(300,620);
	boy.addImage(boyImg);
	boy.scale=0.15;

	stone= new Stone(100,100,100,100)

	rope=new Rope(stone.body,{x:200, y:500});

	mango1= new Mango(1250,200,100,100)
	mango2= new Mango(1000,200,100,100)
	mango3= new Mango(900,100,100,100)
	mango4= new Mango(800,200,100,100)
	mango5= new Mango(950,300,100,100)

	ground= new Ground(725,690,1450,1)

	tree= new Tree(1000,350,1,1)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  stone.display();

  tree.display()



	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	detectcollision(stone,mango1)
	detectcollision(stone,mango2)
	detectcollision(stone,mango3)
	detectcollision(stone,mango4)
	detectcollision(stone,mango5)

  
  drawSprites();

  stone.display();

 
}
 function mouseDragged()
{
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased()
{
rope.fly();
}

function keyPressed(){
if(keyCode===32){
rope.attach(stone.body)
}
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.radius+lstone.radius){

		Matter.Body.setStatic(lmango.body,false)
	}
}



