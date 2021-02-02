var canvas,bgImg;
var tom, tomImg,tomcatch,tomwalking;
var jerry, jerryImg,jerrycatched,jerryshouting;

function preload() {
    bgImg = loadImage("garden.png");
    tomImg= loadAnimation("tomOne.png");
    tomcatch=loadAnimation("tomTwo.png","tomThree.png");
    tomwalking= loadAnimation("tomFour.png");
    jerryImg=loadAnimation("jerryOne.png");
    jerrycatched= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryshouting=loadAnimation("jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg);
    jerry.scale = 0.15;

}

function draw() {

    background(bgImg);

    if(isTouching())
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomwalking);
        tom.changeAnimation("tomLastImage");
        tom.scale=0.2;
       
        jerry.addAnimation("jerryLastImage", jerryshouting);
        jerry.changeAnimation("jerryLastImage");
        jerry.scale=0.15;
       
    }  
   
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomcatch);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerrycatched);
        jerry.changeAnimation("jerryTeasing");
    }
}
function isTouching(){
    if(tom.x - jerry.x < tom.width/4 + jerry.width/4){
        return true;

    }
    else{
        return false;
    }
}