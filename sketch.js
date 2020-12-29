//Create variables here

var  dog, happyDog, database, foodS, foodStock;
var dogSprite;

function preload()
{
  //load images here
  
dog=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500,500);
  
 dogSprite=createSprite(250,250,20,20);
dogSprite.addImage(dog);
dogSprite.scale=0.2;

database=firebase.database();
foodStock=database.ref('food');
foodStock.on("value",readStock);
}


function draw() {  
background(49,139,87);
if(foodS!==undefined){ 

drawSprites();
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dogSprite.addImage(happyDog);
  }
  //add styles here
textSize(16);
fill(Infinity);
stroke(Infinity);
text("Note: PRESS UP_ARROW KEY TO FEED SEERO",70,400);
text("FOOD REMAINING: "+foodS,175,70)
}
//console.log(foodS);
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){

if (x<=0) {
  x=0;
} else {
  x-=1;
}


  database.ref('/').update({
  food:x
})
}