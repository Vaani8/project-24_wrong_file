
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , box1 , box2 , box3 , ball;

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,height,1300,20);
	box1 = new Box(927,300,20,120);
	box2 = new Box(1006,350,180,20);
	box3 = new Box(1085,300,20,120);
	ball = new Ball(100,300,20,20);
	ball.shapeColor=("brown")
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  ball.display();
 ground.display();
  drawSprites();
 
}





