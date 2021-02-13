//constannts
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var engine, world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
function setup()
 {
  //canvas creation
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
    
    //ground
    ground = new Ground(450,390,900,20);

    //holders
    holder1 = new Holder(390,300,250,10);
    holder2 = new Holder(700,200,200,10);

    //blocks
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);
    block17 = new Block(640,175,30,40);
    block18= new Block(670,175,30,40);
    block19= new Block(700,175,30,40);
    block20= new Block(730,175,30,40);
    block21= new Block(760,175,30,40);
    block22= new Block(670,135,30,40);
    block23= new Block(700,135,30,40);
    block24= new Block(730,135,30,40);
    block25= new Block(700,95,30,40);

    //hexagonal shooter
    ball= new Ball(50,200,20);

    //sling[EXTRA]
    sling = new SlingShot(ball.body,{x:100,y:200});


}
function draw() 
{
  //background
  background("#382C2C"); 

  //displaying and filling with colours

  ground.display();
  holder1.display();
  holder2.display();
  fill("skyblue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");

  block13.display();
  block14.display();
  block15.display();
  fill("grey");

  block16.display();
  fill("skyblue");

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");

  block22.display();
  block23.display();
  block24.display();
  fill("pink")

  block25.display();

  ball.display();
  sling.display();

}
function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX ,y :mouseY});
}
function mouseReleased()
{
  sling.fly();
}