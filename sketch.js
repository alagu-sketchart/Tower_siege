const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine, world;

var holder, polygon, ground;
var stand1, stand2;
var slingShot;
var hex;

function preload(){
  hex = loadImage("hex.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  //My engine = Engine.create(); is not working

  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);

  box1 = new Box(280,275,30,40);  
  box2 = new Box(310,275,30,40);
  box3 = new Box(340,275,30,40);
  box4 = new Box(370,275,30,40);
  box5 = new Box(400,275,30,40);
  box6 = new Box(430,275,30,40);
  box7 = new Box(460,275,30,40);
  box8 = new Box(490,275,30,40);
  box9 = new Box(310,235,30,40);
  box10 = new Box(340,235,30,40);
  box11 = new Box(370,235,30,40);
  box12 = new Box(400,235,30,40);
  box13 = new Box(430,235,30,40);
  box14 = new Box(460,235,30,40);
  box15 = new Box(340,195,30,40);
  box16 = new Box(370,195,30,40);
  box17 = new Box(400,195,30,40);
  box18 = new Box(430,195,30,40);
  box19 = new Box(370,155,30,40);
  box20 = new Box(400,155,30,40);
  box21 = new Box(385,115,30,40);

  boxa = new Box(640,175,30,40);
  boxb = new Box(670,175,30,40);
  boxc = new Box(700,175,30,40);
  boxd = new Box(730,175,30,40);
  boxe = new Box(760,175,30,40);
  boxf = new Box(670,135,30,40);
  boxg = new Box(700,135,30,40);
  boxh = new Box(730,135,30,40);
  boxi = new Box(700,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:200,y:200});
}

function draw(){
  background("grey");
  Engine.update(engine);

  fill(rgb(135, 205, 236));
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  fill("lightBlue");
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  fill("lightPink");
  box10.display();
  box11.display();
  boxk12.display();

  fill(rgb(47, 48, 48));
  box13.display();

  fill(rgb(135, 205, 236));
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill("lightGreen");

  box19.display();
  box20.display();
  box21.display();
  fill("lime");

  boxa.display();
  boxb.display();
  boxc.display();
  boxd.display();
  boxe.display();
  boxf.display();
  boxg.display();
  boxh.display();
  boxi.display();

  stand1.display();
  stand2.display();

  //imageMode(CENTER);
  //image(hex,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  ellipse(polygon.position.x, polygon.position.y,20);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}