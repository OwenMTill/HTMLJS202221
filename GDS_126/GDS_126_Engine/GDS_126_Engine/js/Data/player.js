/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/Wiz.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:9,
			cycle:true,
			frames:
			[
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:0, startY:133},
				{width:64, height:64, startX:64, startY:133},
				{width:64, height:64, startX:128, startY:133},
				{width:64, height:64, startX:192, startY:133},
				{width:64, height:64, startX:256, startY:133},
				{width:64, height:64, startX:320, startY:133},
				{width:64, height:64, startX:384, startY:133},
				{width:64, height:64, startX:448, startY:133},
				{width:64, height:64, startX:512, startY:133},
				{width:64, height:64, startX:576, startY:133},
				{width:64, height:64, startX:640, startY:133},
				{width:64, height:64, startX:704, startY:133},
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				{width:64, height:64, startX:0, startY:265},
				{width:64, height:64, startX:64, startY:265},
				{width:64, height:64, startX:128, startY:265},
				{width:64, height:64, startX:192, startY:265},
				{width:64, height:64, startX:256, startY:265}
			]
		},
		//The jump animation 
		jump:
		{
			fps:9,
			cycle:false,
			frames:
			[
				{width:64, height:64, startX:64, startY:198},
				{width:64, height:64, startX:0, startY:198},
				{width:64, height:64, startX:128, startY:198},
				{width:64, height:64, startX:192, startY:198},
				{width:64, height:64, startX:256, startY:198},
				{width:64, height:64, startX:320, startY:198},
				{width:64, height:64, startX:384, startY:198},
				{width:64, height:64, startX:448, startY:198}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:9,
			cycle:false,
			frames:
			[
				{width:64, height:64, startX:0, startY:69},
				{width:64, height:64, startX:64, startY:66},
				{width:64, height:64, startX:128, startY:67}
			]
		},
		//The attack animation 
		attack:
		{
			fps:0.5,
			cycle:false,
			//width:300,
			frames:
			[
				{width:64, height:64, startX:64, startY:0},
				{width:64, height:64, startX:128, startY:0},
				{width:64, height:64, startX:192, startY:0},
				{width:64, height:64, startX:256, startY:0},
				{width:64, height:64, startX:256, startY:0},
				{width:64, height:64, startX:256, startY:0},
				{width:64, height:64, startX:256, startY:0},
				{width:64, height:64, startX:256, startY:0},
				{width:64, height:64, startX:256, startY:0}
			]
		}
	}
		
}

var buttonData = {
	info:{
		src:'images/StartButton.png'
	},
	states:{
		idle:{
			fps: 1,
			cycle: true,
			frames:
			[
				{width: 1377, height: 316, startX:0, startY:0}
			]
		},
		hover:{
			fps: 1,
			cycle: true,
			frames:
			[
				{width: 1377, height: 316, startX:1377, startY:0}
			]
		}
	}
}