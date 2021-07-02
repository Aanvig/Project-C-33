const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
 
var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight=300;

var particle;
var score=0
var count=0
var gameState="start"

function setup() {
  createCanvas(800, 800);
  textSize(20)
  fill("white")
  text("Score : "+score,200,300);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  
  for (var j=0;j<plinkos.length; j++) {
    plinkos[j].display()
  }

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!==null) {

     particle.display();

     if(particle.body.position.y>760) {

       if(particle.body.position.x<300) {
         
         score=score+500
         particle=null
       }

     }
   }

   if(particle!==null) {
    particle.display()

    if(particle.body.position.y>760) {
      if(particle.body.position.x<600 && particle.body.position.x>301) {
        score=score+100
        particle=null
      }
    }
  }

  if(particle!==null) {
    particle.display()

    if(particle.body.position.y>760) {
      if(particle.body.position.x<900 && particle.body.position.x>601) {
        score=score+200
        particle=null
      }
    }
  }

   if(count>=5) gameState="end";
  
}


function mousePressed() {
  if(gameState!=="end") {
    particle = new Particle(mouseX,10,10,10)
  }
}