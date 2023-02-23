var x=false;
var caveData ={
	info:{
		layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8],
			[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,9],
			[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,10],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,10],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,10],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
			
			
		],
		src:`images/MyCave.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:640, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:704, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:768, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:832, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,x],
			[x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x],
			[11,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,2,0,0,0,x],
			[12,0,3,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,x],
			],
			src:`images/MyCave.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
					
					
				],
				src:`images/MyCave.png`,
			},
			states:caveData.states
			
			}