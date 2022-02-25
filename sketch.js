
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var parede1, parede2, parede3, parede4,parede5, parede6, parede7, parede8, parede9;
var parede10, parede11, parede12;
var ground;
var bola;
var ini, ini2;
var collison
var estilingue;

var pontuacao;
var bolas = [];

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  pontuacão = 0;
  
  
  parede1 = new Ground2(500,535,20,70);
  parede2 = new Ground2(580,535,20,70);
  parede6 = new Ground2(600,535,20,70);
  parede3 =  new Ground2(680,535,20,70);
  parede4 = new Ground2(540,500,100,20);
  parede5 = new Ground2(775,535,20,70);
  parede7 =  new Ground2(640,500,100,20);
  parede8 = new Ground2(700,530,20,70);
  parede9 = new Ground2(730,500,100,20);
  parede10 = new Ground2(590,450,20,70);
  parede11 = new Ground2(690,450,20,70);

  ini = new Ini(540,490,50,50);
  ini2 = new Ini(640,490,50,50);
  bola = new Ball(190,520,35);
  ground = new Ground(600,600,1200,50);
  estilingue = new Cannon(200,540,60,50)
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
 
  ground.display();
  parede1.display();
  parede2.display();
  parede3.display();
  parede4.display()
  parede5.display();
  parede6.display();
  parede7.display();
  parede8.display();
  parede9.display();
  parede10.display();
  parede11.display();
  ini.display();
  ini2.display();
  bola.display();
  estilingue.display();
 

 keyReleased();




 
}

  function keyReleased() {
    
    if (keyCode === RIGHT_ARROW) {
      bola.shoot();
    }
  }



