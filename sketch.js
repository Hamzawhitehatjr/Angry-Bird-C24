const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box2,ground; 
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,321,70,70);
    box2 = new Box(900,322,70,70);
    pig1=new Pig(800,321);
    log1=new Log(800,281,300,PI/2);
    ground = new Ground(600,390,1200,20);
    box3 = new Box(700,241,70,70);
    box4 = new Box(900,241,70,70);
    pig2=new Pig(800,240);
    log2=new Log(800,180,300,PI/2);
    box5=new Box(800,100,80,80);
    log3=new Log(850,100,120,-PI/7);
    log4=new Log(750,100,120,PI/7);
    bird= new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();
}

