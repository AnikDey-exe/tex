
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1300,800);

	engine = Engine.create();
  world = engine.world;   
  
  roof = new Roof(width/2,height/4,width/7,20);

  bobDiameter = 40;

  startBobPositionX = width/2;
  
  startBobPositionY = height/4+500;
  
  ball1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
  
  ball2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
  
  ball3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
  
  ball4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
  
  ball5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
  
  rope1 = new Rope(ball1.body,roof.body,-bobDiameter*2, 0);

  rope2 = new Rope(ball2.body,roof.body,-bobDiameter*1, 0);
  
  rope3 = new Rope(ball3.body,roof.body,0, 0);
  
  rope4 = new Rope(ball4.body,roof.body,bobDiameter*1, 0);
  
  rope5 = new Rope(ball5.body,roof.body,bobDiameter*2, 0);
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.run(engine);  

  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {  
  	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
  }
}


/*function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
*/
