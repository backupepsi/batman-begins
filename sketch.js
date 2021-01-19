const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var drops=[];
function preload(){
    
}

function setup(){
   var canvas = createCanvas(1000,1000);
   engine = Engine.create();
   world = engine.world;
    
   umb = new Umbrella(width/2,900);
  // drop = new Drop(400,20)
}

function draw(){
    Engine.update(engine)
    background(0);

   if (frameCount%20===0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0, 400)))
        drops[i].display();
    }
   }
   umb.display();
 
 //   drops[i].update();

   
}   

