const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var ground1, hero1, rope1, monster1;

function preload() {
//preload the images here

backgroundImg = loadImage("sprites/GamingBackground.png");

}

function setup() {
  createCanvas(1500, 600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(450, 550, 1200, 25);
  hero1 = new Hero(100, 300, 200);
  rope1 = new Rope(hero1.body, {x: 200, y: 100});
  monster1 = new Monster(900, 500, 200, 100);

  block1 = new Block(500, 400, 70, 70);
  block2 = new Block(500, 400, 70, 70);
  block3 = new Block(500, 400, 70, 70);
  block4 = new Block(500, 400, 70, 70);
  block5 = new Block(500, 400, 70, 70);
  block6 = new Block(600, 400, 70, 70);
  block7 = new Block(600, 400, 70, 70);
  block8 = new Block(600, 400, 70, 70);
  block9 = new Block(600, 400, 70, 70);
  block10 = new Block(600, 400, 70, 70);
  block11 = new Block(600, 400, 70, 70);
  block12 = new Block(700, 400, 70, 70);
  block13 = new Block(700, 400, 70, 70);
  block14 = new Block(700, 400, 70, 70);
  block15 = new Block(700, 400, 70, 70);
  block16 = new Block(700, 400, 70, 70);
  block17 = new Block(700, 400, 70, 70);

  // create sprites here

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground1.display();
  hero1.display();
  rope1.display();
  monster1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();

}

function mouseDragged() {

  Matter.Body.setPosition(hero1.body, {x: mouseX, y: mouseY});
}

