/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width: 255}).makeSprite(buttonData)
//startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)
startButton.y = startButton.y - 115

var menuBackground = new GameObject();
menuBackground.img.src = "images/StartScreen.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.changeState("hover")
	}
	else
	{
		//Default Button Graphic
		startButton.changeState("idle")
	}
	
	menuBackground.drawStaticImage();
	startButton.drawSprite()
}
	
	
