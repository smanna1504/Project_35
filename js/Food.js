class Food{
    constructor(){
        this.image=loadImage("images/Milk.png");
        var foodStockRef=database.ref('food');
       foodStockRef.on("value",(data)=>{
         foodStock=data.val();
        })
        this.foodStock=20;
    }

    

updateFoodStock(foodStock){
  foodStock=this.foodStock;
}

deductFood(){
if(this.foodStock>0){
  this.foodStock-=1
}
}

getFoodStock(){
  return this.foodStock;
}

display(){
  var x=80,y=100;
console.log(foodStock);
  imageMode(CENTER);
  image(this.image,500,280,70,70);

 if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
      if(i%10===0){
        x=80;
        y+=50;
      }

      image(this.image,x,y,50,50);
      x+=30;
    }
  }

}



}