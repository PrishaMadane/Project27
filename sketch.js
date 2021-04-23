
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800,650);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(200,600,40);
	bobObject2= new Bob(280,600,40);
	bobObject3= new Bob(360,600,40);
	bobObject4= new Bob(440,600,40);
	bobObject5= new Bob(520,600,40);
	roofObject = new Roof(400,150,800,30);
	bobDiameter=30;
	rope1=new Rope(bobObject1.body, roofObject.body, -bobDiameter*2,0);
	rope2=new Rope(bobObject2.body, roofObject.body, -bobDiameter*1,0);
	rope3=new Rope(bobObject3.body, roofObject.body, 0,0);
	rope4=new Rope(bobObject4.body, roofObject.body, bobDiameter*1,0);
	rope5=new Rope(bobObject5.body, roofObject.body, bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("pink");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(rope.body,rope.body.position,{x:75,y:-75});
	}}