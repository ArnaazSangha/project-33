const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var fall=[];


var backgroundImage;

function preload(){
  backgroundImage=loadImage("snow2.jpg");
}
function setup() {
  createCanvas(1200,800);
  engine=Engine.create();
  world=engine.world;

}


function draw() {
  background(backgroundImage); 
  Engine.update(engine)
  if(frameCount%10===0){
    fall.push(new Snow())
  }
  for(var i=0;i<fall.length;i++){
    fall[i].display();

  }
}