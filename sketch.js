
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,Box,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Box=new Rectang(200,200,200,200);
  ball1=new Ball(150,100,20);
  ball2=new Ball(150,100,20);
  ball3=new Ball(150,100,20);
  ball4=new Ball(150,100,20);
  ball5=new Ball(150,100,20);
  ball6=new Ball(150,100,20);
  ball7=new Ball(150,100,20);
  ground1=new Ground(400,700,800,30)
  ground2=new Ground(0,350,30,700)
  ground3=new Ground(800,350,30,700)
  ground4=new Ground(400,0,800,30)
  hammer=new Hammer(100,50)
}


function draw() {
  background(0);

  Engine.update(engine)
 Box.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 ball6.display();
 ball7.display();
 hammer.display();
 
}


