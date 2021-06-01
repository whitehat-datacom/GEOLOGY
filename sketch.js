const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,iron,plane,stone;


function setup(){
    var canvas = createCanvas(1535,715);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(767.5,height,1535,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(700,200,50);
    ironball = new Iron(500,200,50);
    stone = new Rock(1200,300,500);
    //Matter.Body.scale(stone.body,0.2,0.2);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    ironball.display();
    stone.display();
}