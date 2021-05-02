var sunrise;
var sunrise1_Img,sunImg;


function preload()
{
	sunrise1_Img = loadAnimation("sunrise1.png","sunrise2.png","sunrise3.png","sunrise4.png","sunrise5.png","sunrise6.png","sunset7.png","sunset9.png","sunset10.png","sunset11.png","sunset12.png")
    
}

function setup() {
	createCanvas(windowWidth, windowHeight);
 
	sunrise = createSprite(windowWidth/2,windowHeight/2,100,100);
	sunrise.addAnimation("Running",sunrise1_Img);
	sunrise.velocityX = -2;
	
	sunrise.scale=1;

	
     
	

	//Create the Bodies Here.


  
}


function draw() {

  background(0);
  if(sunrise.x <550){
	  sunrise.x = windowWidth/2
  }
  
  drawSprites();
 
}



