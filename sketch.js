
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree;
var boy;
var ground;
var launcher
function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,700,width,20);
stone=new Stone();
mango1=new Mango(500,450,50,50);
mango2=new Mango(550,450,50,50);
mango3=new Mango(590,375,50,50);
mango4=new Mango(650,350,50,50);
mango5=new Mango(680,450,50,50);
mango6=new Mango(725,400,50,50);
tree=new Tree();
boy=new Boy();
launcher=new Launcher(stone.body,{x:235,y:420});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  //tree=loadImage("tree.png");
//image(tree,300,300,50,50);
tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);
 detectollision(stone,mango6);
boy.display();
  drawSprites();
 
}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(stone.body,{x:235,y:420})
	launcher.attach(stone.body);
	}
}	

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
