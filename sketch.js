
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var wall;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;
function setup() {
	createCanvas(800, 400);
    

	engine = Engine.create();
	world = engine.world;
    wall = new Wall(400,100);
	var xp =340;
	var yp =250;
	b1 = new Bob(340,250);
	b2 = new Bob(xp+30,yp);
	b3 = new Bob(xp+60,yp);
	b4 = new Bob(xp+90,yp);
	b5 = new Bob(xp+120,yp);
	
	r1 = new Rope({x:340,y:100},b1.body);
	r2 = new Rope({x:340+30,y:100},b2.body);
	r3 = new Rope({x:340+60,y:100},b3.body);
	r4 = new Rope({x:340+90,y:100},b4.body);
	r5 = new Rope({x:340+120,y:100},b5.body);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("pink");
  wall.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-10,y:-10});
	}
}





