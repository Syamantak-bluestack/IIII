const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
   setbg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    {
        background(backgroundImg);
    }


    Engine.update(engine);

    backgroundImg.display();


}

async function setBg(){

    var res=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var resjson=await res.json();
    var dttm=resjson.datetime;
    var hr=dttm.slice(11,13);


    if(hr>=4 && hr<=7)
    bg="sprites/sunrise1.png";
    else 
    bg="sprites/sunset.png";
    backgroundImg=loadImage(bg);
    

}
