const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground,rop, bgimg;
 function preload(){
   bgimg=loadImage("images/GamingBackground.png");
 }

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground= new Ground(250,390,1200,10);
    ball=new Ball(200,50,40);
    b1 = new Block(400,370,50,50);
    b2=new Block(400,310,50,50);
    b3=new Block(400,250,50,50);
    b4=new Block(400,190,50,50);
    b5=new Block(500,370,50,50);
    b6=new Block(500,310,50,50);
    b7=new Block(500,250,50,50);
    b8=new Block(500,190,50,50);
   
    rope=new Rope(ball.body,{x: 200,y:50})
    monster=new Monster(600,300,100)
    
}

function draw() {
  
  background(bgimg); 
  Engine.update (engine);
  ball.display();
  ground.display(); 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  monster.display();
 if(mouseIsPressed){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
 }

}
