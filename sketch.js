const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myGround, myEngine, myWorld
var ball, box1, box2, ground1
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create()
  myWorld = myEngine.world 
  box1 = new box(700,320,70,70)
  box2 = new box(920,320,70,70)
  box3 = new box(700,240,70,70)
  box4 = new box(920,240,70,70)
  box5 = new box(810,160,70,70)
  pig1 = new pig(810,350)
  pig2 = new pig(810,220)
  log1 = new log(810,260,300,PI/2)
  log2 = new log(810,180,300,PI/2)
  log3 = new log(760,120,150,PI/7)
  log4 = new log(870,120,150,-PI/7)
  bird1 = new bird(300,300)
  ground1 = new ground(600,height,1200,20)
}
function draw() {
  background(255,255,255);  
  Engine.update(myEngine)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  pig1.display()
  pig2.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  bird1.display()
  ground1.display()
}