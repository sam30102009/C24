const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var b;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,height,1000,20)
    box1 = new Box(600,550,70,70);
    box2 = new Box(800,550,70,70);
    pig1 = new Pig(700,550);
    log1 = new log(700,510,300,PI/2);
    box3 = new Box(600,470,70,70);
    box4 = new Box(800,470,70,70);
    pig2 = new Pig(700,450);
    log2 = new log(700,430,300,PI/2);
    box5 = new Box(700,400,70,70);
    log3 = new log(680,400,150,PI/7);
    log4 = new log(770,400,150,-PI/7);
    b = new bird(100,100);
}

function draw(){
    background('grey');
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
   box5.display();
   log3.display();
   log4.display();
   b.display();
}