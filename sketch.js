const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;

var Alex;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world
    
  Alex=new Alex1(200,200,50,50);

 
}

function draw() {
  
  Engine.update(engine);
  background("red");  


    Alex.display();

}