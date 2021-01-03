const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(400,200,300,20);

	  bobObject1 = new bob(300,500,50);
	  bobObject2 = new bob(350,500,50);
	  bobObject3 = new bob(400,500,50);
	  bobObject4 = new bob(450,500,50);
    bobObject5 = new bob(500,500,50);
	  
     rope1 = new rope(bobObject1.body,roof1.body,-95,0);
     World.add(world,rope1);

     rope2 = new rope(bobObject2.body,roof1.body,-47,0);
     World.add(world,rope1);

     rope3 = new rope(bobObject3.body,roof1.body,0,0);
     World.add(world,rope1);

     rope4 = new rope(bobObject4.body,roof1.body,47,0);
     World.add(world,rope1);

     rope5 = new rope(bobObject5.body,roof1.body,95,0);
     World.add(world,rope1);
	  //Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  
   roof1.display();
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

  drawSprites();
 
}
function keyPressed(){
   if(keyCode===UP_ARROW){
     Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:10});
   }
}



