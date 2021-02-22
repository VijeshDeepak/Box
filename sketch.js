const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var box1;
    var box2;
    var box3;
    var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,150,30,60)
    box2=new Box(100,180,45,38)
    box3=new Box(300,170,40,30)

    ground = new Ground(200,height,400,20)
    
    


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display()
}
