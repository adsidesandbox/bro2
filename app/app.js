window.addEventListener('DOMContentLoaded', function(){
const app = new PIXI.Application({ autoResize: true, resolution: 1, backgroundColor: 0x000000 });

document.body.appendChild(app.view);

//var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight,{backgroundColor : 0x000000});

var gameBoxSize=(Math.min(window.innerWidth, window.innerHeight)*0.13);
if(window.innerHeight>window.innerWidth )gameBoxSize=(Math.min(window.innerWidth, window.innerHeight)*0.11);
var gameBoxSizeConst=(Math.min(window.innerWidth, window.innerHeight)*0.1);
console.log(gameBoxSize);



///
window.addEventListener('resize', resize);
function resize() {

	gameBoxSize=(Math.min(window.innerWidth, window.innerHeight)*0.13);
if(window.innerHeight>window.innerWidth )gameBoxSize=(Math.min(window.innerWidth, window.innerHeight)*0.11);
  gameBoxSizeConst=(Math.min(window.innerWidth, window.innerHeight)*0.1);

	app.renderer.resize(window.innerWidth, window.innerHeight);
	//app.renderer.resize(800, 600);


}


resize();




















var stage = new PIXI.Container();
var animatedSprite=[];
var enemyUnits=[];







var uiCellFillSpriteTexture  = new PIXI.Texture.from(uiCellFillSpriteTextureFile);
var uiCellFill2SpriteTexture = new PIXI.Texture.from(uiCellFill2SpriteTextureFile);

//BG
var backgroundSpriteTexture = new PIXI.Texture.from("assets/bg.jpg");
var backgroundSprite = new PIXI.Sprite(backgroundSpriteTexture);
backgroundSprite.anchor.set(0.5, 0.5);
backgroundSprite.x=(window.innerWidth/2);
backgroundSprite.y=(window.innerHeight/2);



app.stage.addChild(backgroundSprite);



//Cells
//Cells
{
var cellTexture = new PIXI.Texture.from("assets/cell.png");
var cellsSprite=[];


for(let i=0; i<7; i++){
		cellsSprite[i]=new PIXI.Sprite(cellTexture);

		cellsSprite[i].anchor.set(0.5, 0.5);
		cellsSprite[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (6 * (gameBoxSize*1.3)  * 0.5);
		cellsSprite[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (1* (gameBoxSize*1.3)  * 0.25);
		cellsSprite[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite[i].height = (gameBoxSize*1.3)*0.5;
		cellsSprite[i].alpha = 0.50;

		app.stage.addChild(cellsSprite[i]);
}

var cellsSprite2=[];
for(let i=0; i<7; i++){
		cellsSprite2[i]=new PIXI.Sprite(cellTexture);
		cellsSprite2[i].anchor.set(0.5, 0.5);
		cellsSprite2[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (5 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite2[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (2* (gameBoxSize*1.3)  * 0.25);
		cellsSprite2[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite2[i].height = (gameBoxSize*1.3)*0.5;
 		cellsSprite2[i].alpha = 0.50;

		app.stage.addChild(cellsSprite2[i]);
}

var cellsSprite3=[];
for(let i=0; i<7; i++){
		cellsSprite3[i]=new PIXI.Sprite(cellTexture);
		cellsSprite3[i].anchor.set(0.5, 0.5);
		cellsSprite3[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (4 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite3[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (3* (gameBoxSize*1.3)  * 0.25);
		cellsSprite3[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite3[i].height = (gameBoxSize*1.3)*0.5;
 		cellsSprite3[i].alpha = 0.20;


		app.stage.addChild(cellsSprite3[i]);
}

var cellsSprite4=[];
for(let i=0; i<7; i++){
		cellsSprite4[i]=new PIXI.Sprite(cellTexture);
		cellsSprite4[i].anchor.set(0.5, 0.5);
		cellsSprite4[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (3 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite4[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (4* (gameBoxSize*1.3)  * 0.25);
		cellsSprite4[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite4[i].height = (gameBoxSize*1.3)*0.5;
		 		cellsSprite4[i].alpha = 0.20;
		app.stage.addChild(cellsSprite4[i]);
}


var cellsSprite5=[];
for(let i=0; i<7; i++){
		cellsSprite5[i]=new PIXI.Sprite(cellTexture);
		cellsSprite5[i].anchor.set(0.5, 0.5);
		cellsSprite5[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (2 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite5[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (5* (gameBoxSize*1.3)  * 0.25);
		cellsSprite5[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite5[i].height = (gameBoxSize*1.3)*0.5;
		 		cellsSprite5[i].alpha = 0.20;
		app.stage.addChild(cellsSprite5[i]);
}

var cellsSprite6=[];
for(let i=0; i<7; i++){
		cellsSprite6[i]=new PIXI.Sprite(cellTexture);
		cellsSprite6[i].anchor.set(0.5, 0.5);
		cellsSprite6[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (1 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite6[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (6* (gameBoxSize*1.3)  * 0.25);
		cellsSprite6[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite6[i].height = (gameBoxSize*1.3)*0.5;
		 		cellsSprite6[i].alpha = 0.20;
		app.stage.addChild(cellsSprite6[i]);
}


var cellsSprite7=[];
for(let i=0; i<7; i++){
		cellsSprite7[i]=new PIXI.Sprite(cellTexture);
		cellsSprite7[i].anchor.set(0.5, 0.5);
		cellsSprite7[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (0 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite7[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (7* (gameBoxSize*1.3)  * 0.25);
		cellsSprite7[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite7[i].height = (gameBoxSize*1.3)*0.5;
		 		cellsSprite7[i].alpha = 0.20;
		app.stage.addChild(cellsSprite7[i]);
}
}




//Cells icons
var icon1SpriteTexture = new PIXI.Texture.from(icon1SpriteTextureFile);
var icon1Sprite = new PIXI.Sprite(icon1SpriteTexture);
icon1Sprite.anchor.set(0.5, 0.5);
icon1Sprite.x=(window.innerWidth/2);
icon1Sprite.y=(window.innerHeight/2);
icon1Sprite.alpha=0.2;

var icon2SpriteTexture = new PIXI.Texture.from(icon2SpriteTextureFile);
var icon2Sprite = new PIXI.Sprite(icon2SpriteTexture);
icon2Sprite.anchor.set(0.5, 0.5);
icon2Sprite.x=(window.innerWidth/2);
icon2Sprite.y=(window.innerHeight/2);
icon2Sprite.alpha=0.2;

var icon3SpriteTexture = new PIXI.Texture.from(icon3SpriteTextureFile);
var icon3Sprite = new PIXI.Sprite(icon3SpriteTexture);
icon3Sprite.anchor.set(0.5, 0.5);
icon3Sprite.x=(window.innerWidth/2);
icon3Sprite.y=(window.innerHeight/2);
icon3Sprite.alpha=0.2;



app.stage.addChild(icon1Sprite);
app.stage.addChild(icon2Sprite);
app.stage.addChild(icon3Sprite);







var uiCellFillSprite3        = new PIXI.Sprite(uiCellFillSpriteTexture);
uiCellFillSprite3.anchor.set(0.5, 0.5);
app.stage.addChild(uiCellFillSprite3);




//cell fill
var uiCellFillSprite4        = new PIXI.Sprite(uiCellFillSpriteTexture);
uiCellFillSprite4.anchor.set(0.5, 0.5);
app.stage.addChild(uiCellFillSprite4);

var uiCellFillSprite1        = new PIXI.Sprite(uiCellFill2SpriteTexture);
uiCellFillSprite1.anchor.set(0.5, 0.5);
app.stage.addChild(uiCellFillSprite1);



//enemyes




var enemyUnitsContainer=[];
var enemySprite=[];

let textureArrayEnemyIdle = [];

for (let i=0; i < 24; i++)
{
     let texture = PIXI.Texture.from(enemySpriteTextureFiles[i]);
     textureArrayEnemyIdle.push(texture);
}

let textureArrayEnemyBossIdle = [];

for (let i=0; i < 24; i++)
{
		 let texture = PIXI.Texture.from(enemyBossTextureFile[i]);
		 textureArrayEnemyBossIdle.push(texture);
}

//enemys
for(let i=5; i>=0; i--){

if (i==2)
{

	//enemyBoss
	{




	enemyBossSprite = new PIXI.AnimatedSprite(textureArrayEnemyBossIdle);
	enemyBossContainer = new PIXI.Container();

	enemyBossContainer.addChild(enemyBossSprite);
	app.stage.addChild(enemyBossContainer);

	enemyBossContainer.x = (window.innerWidth/2)+Math.random()*100;
	enemyBossContainer.y = (window.innerHeight/2);
	enemyBossSprite.anchor.set(0.5, 0.7);

	enemyBossSprite.width=  2 * gameBoxSize;
	enemyBossSprite.height= 2 * gameBoxSize;

	//let initialFrame=Math.floor(Math.random() * 11);
	enemyBossSprite.gotoAndStop(0);
	enemyBossSprite.currentFrameCustom=0;
	enemyBossSprite.lastTime=Date.now();
	enemyBossSprite.deltaTime=0;
	enemyBossSprite.currentFrameCustom=0;
	enemyBossSprite.durationMsFrame=60;

	}


}



enemySprite[i] = new PIXI.AnimatedSprite(textureArrayEnemyIdle);
enemyUnitsContainer[i] = new PIXI.Container();






enemyUnitsContainer[i].addChild(enemySprite[i]);
app.stage.addChild(enemyUnitsContainer[i]);

enemyUnitsContainer[i].x = (window.innerWidth/2)+Math.random()*100;
enemyUnitsContainer[i].y = (window.innerHeight/2);
enemySprite[i].anchor.set(0.4, 0.5);

enemySprite[i].width=  2 * gameBoxSize;
enemySprite[i].height= 2 * gameBoxSize;

let initialFrame=Math.floor(Math.random() * 11);
enemySprite[i].gotoAndStop(initialFrame);
enemySprite[i].currentFrameCustom=initialFrame;
enemySprite[i].lastTime=Date.now();
enemySprite[i].deltaTime=0;
enemySprite[i].currentFrameCustom=0;
enemySprite[i].durationMsFrame=70-initialFrame-initialFrame;
enemySprite[i].dead=false;
}






var uiCellFillSprite2        = new PIXI.Sprite(uiCellFill2SpriteTexture);
uiCellFillSprite2.anchor.set(0.5, 0.5);
app.stage.addChild(uiCellFillSprite2);



//player1Unit
//looxhnik
{
var player1TextureArray=[];
for (let i=0; i < 1; i++)
{
     let texture = PIXI.Texture.from(player1TextureFile[i]);
     player1TextureArray.push(texture);
}

var player1UnitSprite= new PIXI.AnimatedSprite(player1TextureArray);
var player1UnitContainer = new PIXI.Container();
player1UnitSprite.anchor.set(0.5, 1);

player1UnitContainer.dragging=false;
player1UnitContainer.interactive = true;
player1UnitContainer
	 .on('mousedown', onDragStart1)
	 .on('touchstart', onDragStart1)
	 .on('mouseup', onDragEnd1)
	 .on('mouseupoutside', onDragEnd1)
	 .on('touchend', onDragEnd1)
	 .on('touchendoutside', onDragEnd1)
	 .on('mousemove', onDragMove1)
	 .on('touchmove', onDragMove1);

	 function onDragStart1(event)
	 {
	     // store a reference to the data
	     // the reason for this is because of multitouch
	     // we want to track the movement of this particular touch
	     this.data = event.data;
	     this.alpha = 0.7;
	     this.dragging = true;
	 }

	 function onDragEnd1()
	 {
	     this.alpha = 1;

				if (cellSelectedID==2)
				{
				//alert(cellSelectedID);
				gamePhase=2;
				soundUI.play();
				}


cellSelectedID=null;


	     this.dragging = false;
	     // set the interaction data to null
	     this.data = null;
	 }

	 function onDragMove1()
	 {
	     if (this.dragging)
	     {
	         var newPosition = this.data.getLocalPosition(this.parent);
	         this.position.x = newPosition.x;
	         this.position.y = newPosition.y;
	     }
	 }





player1UnitContainer.addChild(player1UnitSprite);
app.stage.addChild(player1UnitContainer);



player1UnitContainer.x = (window.innerWidth/2)-200
player1UnitContainer.y = (window.innerHeight/2);
player1UnitSprite.anchor.set(0.5, 0.5);

player1UnitSprite.width=  2 * gameBoxSize;
player1UnitSprite.height= 2 * gameBoxSize;

let initialFrame=Math.floor(Math.random() * 11);

player1UnitSprite.gotoAndStop(0);

player1UnitSprite.currentFrameCustom=0;



player1UnitSprite.lastTime=Date.now();
player1UnitSprite.deltaTime=0;
player1UnitSprite.currentFrameCustom=0;
player1UnitSprite.durationMsFrame=60;
}


//player 2
//viking
{
var player2TextureArray=[];
for (let i=0; i < 12; i++)
{
     let texture = PIXI.Texture.from(player2textureFile[i]);
     player2TextureArray.push(texture);
}

var player2UnitSprite= new PIXI.AnimatedSprite(player2TextureArray);
var player2UnitContainer = new PIXI.Container();
player2UnitSprite.anchor.set(0.5, 0.5);

player2UnitContainer.dragging=false;
player2UnitContainer.interactive = true;
player2UnitContainer
	 .on('mousedown', onDragStart2)
	 .on('touchstart', onDragStart2)
	 .on('mouseup', onDragEnd2)
	 .on('mouseupoutside', onDragEnd2)
	 .on('touchend', onDragEnd2)
	 .on('touchendoutside', onDragEnd2)
	 .on('mousemove', onDragMove2)
	 .on('touchmove', onDragMove2);

	 function onDragStart2(event)
	 {
	     // store a reference to the data
	     // the reason for this is because of multitouch
	     // we want to track the movement of this particular touch
	     this.data = event.data;
	     this.alpha = 0.7;
	     this.dragging = true;
	 }

	 function onDragEnd2()
	 {
	     this.alpha = 1;

				if (cellSelectedID==5)
				{
				//alert(cellSelectedID);
				gamePhase=3;
				soundUI.play();
				}


cellSelectedID=null;


	     this.dragging = false;
	     // set the interaction data to null
	     this.data = null;
	 }

	 function onDragMove2()
	 {
	     if (this.dragging)
	     {
	         var newPosition = this.data.getLocalPosition(this.parent);
	         this.position.x = newPosition.x;
	         this.position.y = newPosition.y;
	     }
	 }





player2UnitContainer.addChild(player2UnitSprite);
app.stage.addChild(player2UnitContainer);



player2UnitContainer.x = (window.innerWidth/2)-200
player2UnitContainer.y = (window.innerHeight/2);
player2UnitSprite.anchor.set(0.5, 0.5);

player2UnitSprite.width=  2 * gameBoxSize;
player2UnitSprite.height= 2 * gameBoxSize;

let initialFrame=Math.floor(Math.random() * 11);

player2UnitSprite.gotoAndStop(0);

player2UnitSprite.currentFrameCustom=0;



player2UnitSprite.lastTime=Date.now();
player2UnitSprite.deltaTime=0;
player2UnitSprite.currentFrameCustom=0;
player2UnitSprite.durationMsFrame=60;
}


//player 3
//knight
{
var player3TextureArray=[];
for (let i=0; i < 1; i++)
{
     let texture = PIXI.Texture.from(player3textureFile[i]);
     player3TextureArray.push(texture);
}

var player3UnitSprite= new PIXI.AnimatedSprite(player3TextureArray);
var player3UnitContainer = new PIXI.Container();
player3UnitSprite.anchor.set(0.5, 0.5);

player3UnitContainer.dragging=false;
player3UnitContainer.interactive = true;
player3UnitContainer
	 .on('mousedown', onDragStart3)
	 .on('touchstart', onDragStart3)
	 .on('mouseup', onDragEnd3)
	 .on('mouseupoutside', onDragEnd3)
	 .on('touchend', onDragEnd3)
	 .on('touchendoutside', onDragEnd3)
	 .on('mousemove', onDragMove3)
	 .on('touchmove', onDragMove3);

	 function onDragStart3(event)
	 {
	     // store a reference to the data
	     // the reason for this is because of multitouch
	     // we want to track the movement of this particular touch
	     this.data = event.data;
	     this.alpha = 0.7;
	     this.dragging = true;
	 }

	 function onDragEnd3()
	 {
	     this.alpha = 1;
		//		alert(cellSelectedID);
				if (cellSelectedID==3)
				{

				gamePhase=4;
				soundUI.play();
				}


cellSelectedID=null;


	     this.dragging = false;
	     // set the interaction data to null
	     this.data = null;
	 }

	 function onDragMove3()
	 {
	     if (this.dragging)
	     {
	         var newPosition = this.data.getLocalPosition(this.parent);
	         this.position.x = newPosition.x;
	         this.position.y = newPosition.y;
	     }
	 }





player3UnitContainer.addChild(player3UnitSprite);
app.stage.addChild(player3UnitContainer);



player3UnitContainer.x = (window.innerWidth/2)-200
player3UnitContainer.y = (window.innerHeight/2);
player3UnitSprite.anchor.set(0.5, 0.5);

player3UnitSprite.width=  2 * gameBoxSize;
player3UnitSprite.height= 2 * gameBoxSize;

let initialFrame=Math.floor(Math.random() * 11);

player3UnitSprite.gotoAndStop(0);

player3UnitSprite.currentFrameCustom=0;



player3UnitSprite.lastTime=Date.now();
player3UnitSprite.deltaTime=0;
player3UnitSprite.currentFrameCustom=0;
player3UnitSprite.durationMsFrame=60;
}


//player1Attack
{
var player1AttackTextureArray=[];
for (let i=0; i < 12; i++)
{
     let texture = PIXI.Texture.from(player1AttackTextureFile[i]);
     player1AttackTextureArray.push(texture);

}

var player1AttackUnitSprite= new PIXI.AnimatedSprite(player1AttackTextureArray);
var player1AttackUnitContainer = new PIXI.Container();

player1AttackUnitSprite.alpha=0;
player1AttackUnitContainer.addChild(player1AttackUnitSprite);
app.stage.addChild(player1AttackUnitContainer);




player1AttackUnitSprite.anchor.set(0.5, 0.7);

player1AttackUnitSprite.width=  2 * gameBoxSize;
player1AttackUnitSprite.height= 2 * gameBoxSize;


player1AttackUnitSprite.gotoAndStop(0);
player1AttackUnitSprite.currentFrameCustom=0;
player1AttackUnitSprite.lastTime=Date.now();
player1AttackUnitSprite.deltaTime=0;
player1AttackUnitSprite.currentFrameCustom=0;
player1AttackUnitSprite.durationMsFrame=60;
}


//flash
{
var flashTextureArray=[];
for (let i=0; i < 7; i++)
{
     let texture = PIXI.Texture.from(flashTextureFile[i]);
     flashTextureArray.push(texture);
}

var flashUnitSprite= new PIXI.AnimatedSprite(flashTextureArray);
var flashUnitContainer = new PIXI.Container();


flashUnitContainer.addChild(flashUnitSprite);
app.stage.addChild(flashUnitContainer);
flashUnitContainer.alpha=0;



flashUnitSprite.anchor.set(0, 1);

flashUnitSprite.width=  2 * gameBoxSize;
flashUnitSprite.height= 2 * gameBoxSize;


flashUnitSprite.gotoAndStop(0);
flashUnitSprite.currentFrameCustom=0;
flashUnitSprite.lastTime=Date.now();
flashUnitSprite.deltaTime=0;
flashUnitSprite.currentFrameCustom=0;
flashUnitSprite.durationMsFrame=60;
}


//arrow
{
var arrowSpriteTexture = new PIXI.Texture.from(arrowSpriteTextureFile);
var arrowSprite = new PIXI.Sprite(arrowSpriteTexture);
arrowSprite.anchor.set(0.5, 0.5);
arrowSprite.x=(window.innerWidth/2);
arrowSprite.y=(window.innerHeight/2);
arrowSprite.alpha=0;
app.stage.addChild(arrowSprite);
}


var uiCellFillSprite5        = new PIXI.Sprite(uiCellFillSpriteTexture);
uiCellFillSprite5.anchor.set(0.5, 0.5);
app.stage.addChild(uiCellFillSprite5);



//smoke
// function r(min, max) {
  // return Math.floor(Math.random() * (max - min) + 1) + min
// }

// const smokes = new PIXI.Container();
// app.stage.addChild(smokes);
// const smokeTexture = PIXI.Texture.from( 'assets/smoke.png');

// smokeTexture.width = 300;
// smokeTexture.height = 300;


//  //smokes.blendMode = PIXI.BLEND_MODES.MULTIPLY;

// const smokeParticles = []

// for (let p = 0; p < 100; p++) {
  // const particle = new PIXI.Sprite(smokeTexture);

	// if (p<50){
  // particle.position.set(
    // (window.innerWidth / 2) - (Math.random() *(window.innerWidth))-gameBoxSize*2,
    // (window.innerHeight / 2) - (Math.random() * 1000 - 500),
  // );
// }
// else {
	// particle.position.set(
    // (window.innerWidth / 2) + (Math.random() * 	(window.innerWidth))+gameBoxSize*2,
    // (window.innerHeight / 2) - (Math.random() * 1000 - 500),
  // );
// }


  // particle.anchor.set(0.5);
  // particle.rotation = Math.random() * 360;
  // particle.alpha = 0.05;
  // particle.blendMode = PIXI.BLEND_MODES.SCREEN;
  // particle.tint = 0xffffff;
  // particle._speed = (r(0, 100) - 50) / 100000;



  // smokes.addChild(particle);
  // smokeParticles.push(particle);

// }

//






//fade _box
var fadeLayer = PIXI.Sprite.from(PIXI.Texture.WHITE);
fadeLayer.width  = 200;
fadeLayer.height = 200;
fadeLayer.tint = 0x000000;
fadeLayer.anchor.set(0.5);
fadeLayer.alpha=0;
app.stage.addChild(fadeLayer);

//uiHandSpriteTextureFile
var uiHandSpriteTexture = new PIXI.Texture.from(uiHandSpriteTextureFile);
var uiHandSprite = new PIXI.Sprite(uiHandSpriteTexture);
uiHandSprite.anchor.set(1, 0);
uiHandSprite.x=(window.innerWidth/2);
uiHandSprite.y=(window.innerHeight/2);
uiHandSprite.width  = gameBoxSize * 0.2;
uiHandSprite.height = gameBoxSize * 0.2;
app.stage.addChild(uiHandSprite);


//uiButtonSpriteTextureFile
var uiButtonSpriteTexture = new PIXI.Texture.from(uiButtonSpriteTextureFile);
var uiButtonSprite = new PIXI.Sprite(uiButtonSpriteTexture);
uiButtonSprite.anchor.set(0.5, 0.5);
uiButtonSprite.x=(window.innerWidth/2);
uiButtonSprite.y=(window.innerHeight/2);
uiButtonSprite.width  = gameBoxSizeConst * 2.5 * 1.5;
uiButtonSprite.height = gameBoxSizeConst * 1.5 * 1.5;

var startNext = function(){
gamePhase=5;
soundUI.play();
}
uiButtonSprite.on('mousedown',  startNext);
uiButtonSprite.on('touchstart', startNext);
uiButtonSprite.interactive = false;
uiButtonSprite.alpha = false;

app.stage.addChild(uiButtonSprite);





var gamePhase=1;

//setTimeout(function(){gamePhase=5},3000)
var delta=0;
var lastTimeForDelta=Date.now();
var cellSelected=false;
var cellSelectedID=null;
var yPlayerShift=0.2;

var gamePhase5CurrentFrame=0;
var gameArrowframe=0;
var gamePlayer2hits=0;

var gameEnded=false;

// start animating
animate();
function animate()
{
requestAnimationFrame(animate);

//gameSoundLoop.play();

delta++;



delta=Date.now()-lastTimeForDelta;
lastTimeForDelta=Date.now();

cellSelected=false;



// let sp = smokeParticles.length;
// while (sp--) {
	// const x = smokeParticles[sp]._speed;
	// smokeParticles[sp].rotation += (delta * x*0.7);
// }


backgroundSprite.x=(window.innerWidth/2);
backgroundSprite.y=(window.innerHeight/2);
backgroundSprite.height = gameBoxSize * 20;
backgroundSprite.width  = gameBoxSize * 20;
//backgroundSprite.alpha=0.1;




player1UnitContainer.width  = gameBoxSize*1.4;
player1UnitContainer.height = gameBoxSize*1.4;
player2UnitContainer.width  = gameBoxSize * 1.8;
player2UnitContainer.height = gameBoxSize * 1.8;
player3UnitContainer.width  = gameBoxSize;
player3UnitContainer.height = gameBoxSize;




player1AttackUnitContainer.width  = gameBoxSize*1.4;
player1AttackUnitContainer.height = gameBoxSize*1.4;


if (gamePhase==1)
{
	let multipicatorForHand=(Math.sin(Date.now()/200)+1)/2;
if (Math.cos(Date.now()/200) < 0) uiHandSprite.alpha=0; else uiHandSprite.alpha=1;
	let deltaDistanceForX= cellsSprite2[0].x- cellsSprite2[2].x;
	let deltaDistanceForY= cellsSprite2[0].y- cellsSprite2[2].y;
	uiHandSprite.width  = gameBoxSize * 0.5;
	uiHandSprite.height = gameBoxSize * 0.5;
	uiHandSprite.x  = cellsSprite2[0].x - multipicatorForHand * deltaDistanceForX;
	uiHandSprite.y  = cellsSprite2[0].y - multipicatorForHand * deltaDistanceForY;




player1UnitContainer.interactive = true;
player2UnitContainer.interactive = false;
player3UnitContainer.interactive = false;

if (player1UnitContainer.dragging==false) 	player1UnitContainer.x = cellsSprite2[0].x  + gameBoxSize*0.2;
if (player1UnitContainer.dragging==false)  	player1UnitContainer.y = cellsSprite2[0].y - yPlayerShift*gameBoxSize - gameBoxSize*0.2;
player2UnitContainer.x = cellsSprite[6].x ;
player2UnitContainer.y = cellsSprite[6].y - yPlayerShift*gameBoxSize;
player3UnitContainer.x = cellsSprite[0].x ;
player3UnitContainer.y = cellsSprite[0].y - yPlayerShift*gameBoxSize;









}

if (gamePhase==2)
{
	let multipicatorForHand=(Math.sin(Date.now()/200)+1)/2;
	if (Math.cos(Date.now()/200) < 0) uiHandSprite.alpha=0; else uiHandSprite.alpha=1;
	let deltaDistanceForX= cellsSprite[6].x- cellsSprite2[5].x;
	let deltaDistanceForY= cellsSprite[6].y- cellsSprite2[5].y;
	uiHandSprite.width  = gameBoxSize * 0.5;
	uiHandSprite.height = gameBoxSize * 0.5;
	uiHandSprite.x  = cellsSprite[6].x - multipicatorForHand * deltaDistanceForX;
	uiHandSprite.y  = cellsSprite[6].y - multipicatorForHand * deltaDistanceForY;





player1UnitContainer.interactive = false;
player2UnitContainer.interactive = true;
player3UnitContainer.interactive = false;

player1UnitContainer.x=cellsSprite2[2].x  + gameBoxSize*0.2;
player1UnitContainer.y=cellsSprite2[2].y - yPlayerShift*gameBoxSize  - gameBoxSize*0.2;
if (player2UnitContainer.dragging==false) 	player2UnitContainer.x = cellsSprite[6].x ;
if (player2UnitContainer.dragging==false) 	player2UnitContainer.y = cellsSprite[6].y - yPlayerShift*gameBoxSize;
player3UnitContainer.x = cellsSprite[0].x ;
player3UnitContainer.y = cellsSprite[0].y - yPlayerShift*gameBoxSize;

}

if (gamePhase==3)
{
	let multipicatorForHand=(Math.sin(Date.now()/200)+1)/2;
	if (Math.cos(Date.now()/200) < 0) uiHandSprite.alpha=0; else uiHandSprite.alpha=1;
	let deltaDistanceForX= cellsSprite[0].x- cellsSprite2[3].x;
	let deltaDistanceForY= cellsSprite[0].y- cellsSprite2[3].y;
	uiHandSprite.width  = gameBoxSize * 0.5;
	uiHandSprite.height = gameBoxSize * 0.5;
	uiHandSprite.x  = cellsSprite[0].x - multipicatorForHand * deltaDistanceForX;
	uiHandSprite.y  = cellsSprite[0].y - multipicatorForHand * deltaDistanceForY;



player1UnitContainer.interactive = false;
player2UnitContainer.interactive = false;
player3UnitContainer.interactive = true;

player1UnitContainer.x=cellsSprite2[2].x  + gameBoxSize*0.2;
player1UnitContainer.y=cellsSprite2[2].y - yPlayerShift*gameBoxSize - gameBoxSize*0.2;
player2UnitContainer.x = cellsSprite2[5].x ;
player2UnitContainer.y = cellsSprite2[5].y - yPlayerShift*gameBoxSize;
if (player3UnitContainer.dragging==false) 	player3UnitContainer.x = cellsSprite[0].x ;
if (player3UnitContainer.dragging==false) 	player3UnitContainer.y = cellsSprite[0].y - yPlayerShift*gameBoxSize;

}


if (gamePhase==4)
{
uiHandSprite.alpha=0;
uiButtonSprite.alpha=1;
uiButtonSprite.interactive = true;

uiButtonSprite.x=(window.innerWidth/2);
uiButtonSprite.y=(window.innerHeight/2);
uiButtonSprite.width  = gameBoxSizeConst * 2.5 * 1.1 * (1+(Math.sin(Date.now()/200)+1)*0.1);
uiButtonSprite.height = gameBoxSizeConst * 1.5 * 1.1 * (1+(Math.sin(Date.now()/200)+1)*0.1);



player1UnitContainer.interactive = false;
player2UnitContainer.interactive = false;
player3UnitContainer.interactive = false;

player1UnitContainer.x=cellsSprite2[2].x  + gameBoxSize*0.2;
player1UnitContainer.y=cellsSprite2[2].y - yPlayerShift*gameBoxSize - gameBoxSize*0.2;
player2UnitContainer.x = cellsSprite2[5].x ;
player2UnitContainer.y = cellsSprite2[5].y - yPlayerShift*gameBoxSize;
player3UnitContainer.x = cellsSprite2[3].x ;
player3UnitContainer.y = cellsSprite2[3].y - yPlayerShift*gameBoxSize;


}

if (gamePhase==5)
{
uiHandSprite.alpha=0;
uiButtonSprite.alpha=0;
uiButtonSprite.interactive = false;

	player1UnitContainer.interactive = false;
	player2UnitContainer.interactive = false;
	player3UnitContainer.interactive = false;

player1AttackUnitContainer.x = cellsSprite2[2].x + gameBoxSize*0.2;
player1AttackUnitContainer.y = cellsSprite2[2].y - yPlayerShift*gameBoxSize + gameBoxSize*0.05;

player1UnitContainer.x=cellsSprite2[2].x  + gameBoxSize*0.5;
player1UnitContainer.y=cellsSprite2[2].y  - yPlayerShift*gameBoxSize + gameBoxSize*0.5;

player2UnitContainer.x = cellsSprite2[5].x ;
player2UnitContainer.y = cellsSprite2[5].y - yPlayerShift*gameBoxSize;
player3UnitContainer.x = cellsSprite2[3].x ;
player3UnitContainer.y = cellsSprite2[3].y - yPlayerShift*gameBoxSize;



if(enemyBossSprite.currentFrameCustom==20) player3UnitContainer.x=player3UnitContainer.x-gameBoxSize*0.1;

player1UnitContainer.alpha=0;
player1AttackUnitSprite.alpha=1;

flashUnitContainer.x = cellsSprite2[2].x + gameBoxSize * 0.3;
flashUnitContainer.y = cellsSprite2[2].y - gameBoxSize * 0.5;


//if (gamePhase5CurrentFrame<12) player1AttackUnitSprite.gotoAndStop(gamePhase5CurrentFrame);

if (gamePhase5CurrentFrame>120){
player1AttackUnitSprite.gotoAndStop(player1AttackUnitSprite.currentFrameCustom);
player1AttackUnitSprite.deltaTime=Date.now()-player1AttackUnitSprite.lastTime;
if (player1AttackUnitSprite.deltaTime>player1AttackUnitSprite.durationMsFrame)
{
if(player1AttackUnitSprite.currentFrameCustom<11) player1AttackUnitSprite.currentFrameCustom++;
}

if (player1AttackUnitSprite.currentFrameCustom==6) soundArrow.play();

if (player1AttackUnitSprite.currentFrameCustom>10)
{
  flashUnitContainer.alpha=1;
	flashUnitSprite.gotoAndStop(flashUnitSprite.currentFrameCustom);
	flashUnitSprite.deltaTime=Date.now()-flashUnitSprite.lastTime;
	if (flashUnitSprite.deltaTime>flashUnitSprite.durationMsFrame)
	{
	if(flashUnitSprite.currentFrameCustom<7) flashUnitSprite.currentFrameCustom++;
	if (flashUnitSprite.currentFrameCustom==7)  flashUnitContainer.alpha=0;
	}

}


if (player1AttackUnitSprite.currentFrameCustom>10 && gameArrowframe<500)
{

	if (gameArrowframe==1)
	{
	enemySprite[3].dead=true;
	enemySprite[3].gotoAndStop(12);

	enemySprite[4].dead=true;
	enemySprite[4].gotoAndStop(12);

	enemySprite[5].dead=true;
	enemySprite[5].gotoAndStop(12);
	}

arrowSprite.alpha=1;
gameArrowframe++;
arrowSprite.x=cellsSprite2[2].x + gameBoxSize * 0.3 + gameArrowframe * 20;
arrowSprite.y=cellsSprite2[2].y - gameBoxSize * 0.5 - gameArrowframe * 20 *0.5;
arrowSprite.width=gameBoxSize;
arrowSprite.height=gameBoxSize*0.66;
}

}




if (gamePhase5CurrentFrame>180){

if(gamePhase5CurrentFrame==181) player2UnitContainer.x = cellsSprite2[5].x + gameBoxSize*1.1;
if(gamePhase5CurrentFrame==181) player2UnitContainer.y = cellsSprite2[5].y - yPlayerShift*gameBoxSize - gameBoxSize*1.1 * 0.5;

if(gamePhase5CurrentFrame==182) player2UnitContainer.x = cellsSprite2[5].x + gameBoxSize*0.2;
if(gamePhase5CurrentFrame==182) player2UnitContainer.y = cellsSprite2[5].y - yPlayerShift*gameBoxSize - gameBoxSize*0.2 * 0.5;

if(gamePhase5CurrentFrame==183) player2UnitContainer.x = cellsSprite2[5].x + gameBoxSize*0.6;
if(gamePhase5CurrentFrame==183) player2UnitContainer.y = cellsSprite2[5].y - yPlayerShift*gameBoxSize - gameBoxSize*0.6 * 0.5;

if(gamePhase5CurrentFrame>183) player2UnitContainer.x = cellsSprite2[5].x + gameBoxSize*0.9;
if(gamePhase5CurrentFrame>183) player2UnitContainer.y = cellsSprite2[5].y - yPlayerShift*gameBoxSize - gameBoxSize*0.9 * 0.5;


if (gamePlayer2hits<2)
{
player2UnitSprite.deltaTime=Date.now()-player2UnitSprite.lastTime;
if (player2UnitSprite.deltaTime>player2UnitSprite.durationMsFrame)
{
if(player2UnitSprite.currentFrameCustom==5) soundAxe.play();
player2UnitSprite.currentFrameCustom++;
if(player2UnitSprite.currentFrameCustom>11)  {player2UnitSprite.currentFrameCustom=0; gamePlayer2hits++;}
player2UnitSprite.gotoAndStop(player2UnitSprite.currentFrameCustom);
player2UnitSprite.lastTime=Date.now();
player2UnitSprite.deltaTime=0;



if (gamePlayer2hits==1)
{
enemySprite[0].dead=true;
enemySprite[1].dead=true;
enemySprite[2].dead=true;
}


}
}

}


if(gamePhase5CurrentFrame>320 && gameEnded==false)
{
gameEnded=true;	

gameSoundLoop.pause();
gameSoundLoop.volume(0);
soundBoss.volume(0);

console.log('end');
console.log(gameEnded);

backgroundSprite.interactive = true;
backgroundSprite.on('mousedown'  , function(){openStore(); console.log('store');})
backgroundSprite.on('touchstart' , function(){openStore(); console.log('store');})

openStore();

}


// alphaFade
if(gamePhase5CurrentFrame>1111220)
{
let alphaDelta=(gamePhase5CurrentFrame-220)*0.01;
if (alphaDelta>1)alphaDelta=1;
fadeLayer.width  = window.innerWidth ;
fadeLayer.height = window.innerHeight;
fadeLayer.x = window.innerWidth /2;
fadeLayer.y = window.innerHeight/2;
fadeLayer.alpha=alphaDelta;
}

gamePhase5CurrentFrame++;




}


//
enemyUnitsContainer[0].x=cellsSprite4[4].x;
enemyUnitsContainer[0].y=cellsSprite4[4].y;

enemyUnitsContainer[1].x=cellsSprite4[5].x;
enemyUnitsContainer[1].y=cellsSprite4[5].y;

enemyUnitsContainer[2].x=cellsSprite4[6].x;
enemyUnitsContainer[2].y=cellsSprite4[6].y;


enemyUnitsContainer[3].x=cellsSprite5[2].x;
enemyUnitsContainer[3].y=cellsSprite5[2].y;

enemyUnitsContainer[4].x=cellsSprite6[2].x;
enemyUnitsContainer[4].y=cellsSprite6[2].y;

enemyUnitsContainer[5].x=cellsSprite7[2].x;
enemyUnitsContainer[5].y=cellsSprite7[2].y;



//Boss
enemyBossContainer.x=cellsSprite3[4].x-gameBoxSize*0.2;
enemyBossContainer.y=cellsSprite3[4].y-gameBoxSize*0.5;
enemyBossSprite.width=  2.3 * gameBoxSize;
enemyBossSprite.height= 2.3 * gameBoxSize;

enemyBossSprite.deltaTime=Date.now()-enemyBossSprite.lastTime;
if (enemyBossSprite.deltaTime>enemyBossSprite.durationMsFrame)
{
if(enemyBossSprite.currentFrameCustom==18) soundBoss.play();
enemyBossSprite.currentFrameCustom++;
if(enemyBossSprite.currentFrameCustom>23 && gamePhase==5) enemyBossSprite.currentFrameCustom=12;
if(enemyBossSprite.currentFrameCustom>11 && gamePhase<5)  enemyBossSprite.currentFrameCustom=0;


enemyBossSprite.gotoAndStop(enemyBossSprite.currentFrameCustom);
enemyBossSprite.lastTime=Date.now();
enemyBossSprite.deltaTime=0;
}







//enemy animation
for(let i=0; i<6; i++){
	enemySprite[i].width=  1.6 * gameBoxSize;
	enemySprite[i].height= 1.6 * gameBoxSize;


	enemySprite[i].deltaTime=Date.now()-enemySprite[i].lastTime;
//console.log(enemySprite[i].width);
//console.log(enemySprite[i].totalFrames );






if (enemySprite[i].deltaTime>enemySprite[i].durationMsFrame)
{

enemySprite[i].currentFrameCustom++
//if(enemySprite[i]<=11) enemySprite[i].currentFrameCustom++;
if(enemySprite[i].currentFrameCustom>11 && enemySprite[i].dead==false) enemySprite[i].currentFrameCustom=0;
if(enemySprite[i].currentFrameCustom>23 && enemySprite[i].dead==true) enemySprite[i].currentFrameCustom=23;
//console.log(enemySprite[i].currentFrameCustom);
//enemySprite[i].gotoAndStop(enemySprite[i].currentFrameCustom);
//enemySprite[i].gotoAndStop(enemySprite[i].currentFrameCustom+1);
enemySprite[i].gotoAndStop(enemySprite[i].currentFrameCustom);
enemySprite[i].lastTime=Date.now();
enemySprite[i].deltaTime=0;
}


//enemySprite[i].lastTime=Date.now();


}


//Cells
{



for(let i=0; i<7; i++){
cellsSprite[i].alpha = 0.5;
		cellsSprite[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (6 * (gameBoxSize*1.3)  * 0.5);
		cellsSprite[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (1* (gameBoxSize*1.3)  * 0.25);
		cellsSprite[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite[i].height = (gameBoxSize*1.3)*0.5;
//		 		cellsSprite3[i].alpha = 0.20;

if(player1UnitContainer.dragging==true && cellSelected==false)
{
if (	Math.abs(player1UnitContainer.x-cellsSprite[i].x)<(gameBoxSize*0.4)
	&&
	Math.abs(player1UnitContainer.y-(cellsSprite[i].y-gameBoxSize*0.3))<(gameBoxSize*0.2)
)
{
cellsSprite[i].alpha = 1;
cellSelected=true;
}
else
cellsSprite[i].alpha = 0.5;
//cellSelected=false;
}

if(player2UnitContainer.dragging==true && cellSelected==false)
{
if (	Math.abs(player2UnitContainer.x-cellsSprite[i].x)<(gameBoxSize*0.4)
	&&
	Math.abs(player2UnitContainer.y-(cellsSprite[i].y-gameBoxSize*0.3))<(gameBoxSize*0.2)
)
{
cellsSprite[i].alpha = 1;
cellSelected=true;
}
else
cellsSprite[i].alpha = 0.5;
//cellSelected=false;
}

if(player3UnitContainer.dragging==true && cellSelected==false)
{
if (	Math.abs(player3UnitContainer.x-cellsSprite[i].x)<(gameBoxSize*0.4)
	&&
	Math.abs(player3UnitContainer.y-(cellsSprite[i].y-gameBoxSize*0.3))<(gameBoxSize*0.2)
)
{
cellsSprite[i].alpha = 1;
cellSelected=true;
}
else
cellsSprite[i].alpha = 0.5;
//cellSelected=false;
}


}


for(let i=0; i<7; i++){
	cellsSprite2[i].alpha = 0.5;
		cellsSprite2[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (5 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite2[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (2* (gameBoxSize*1.3)  * 0.25);
		cellsSprite2[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite2[i].height = (gameBoxSize*1.3)*0.5;


		if(player1UnitContainer.dragging==true && cellSelected==false)
		{
		if (	Math.abs(player1UnitContainer.x-cellsSprite2[i].x)<(gameBoxSize*0.4)
			&&
			Math.abs(player1UnitContainer.y-(cellsSprite2[i].y-gameBoxSize*0.3))<(gameBoxSize*0.2)
		)
		{
		cellSelectedID=i;
		cellsSprite2[i].alpha = 1;
		cellSelected=true;
		}
		else
		cellsSprite2[i].alpha = 0.5;
	//	cellSelected=false;
		}


		if(player2UnitContainer.dragging==true && cellSelected==false)
		{
		if (	Math.abs(player2UnitContainer.x-cellsSprite2[i].x)<(gameBoxSize*0.4)
			&&
			Math.abs(player2UnitContainer.y-(cellsSprite2[i].y-gameBoxSize*0.3))<(gameBoxSize*0.2)
		)
		{
		cellSelectedID=i;
		cellsSprite2[i].alpha = 1;
		cellSelected=true;
		}
		else
		cellsSprite2[i].alpha = 0.5;
	//	cellSelected=false;
		}

		if(player3UnitContainer.dragging==true && cellSelected==false)
		{
		if (	Math.abs(player3UnitContainer.x-cellsSprite2[i].x)<(gameBoxSize*0.4)
			&&
			Math.abs(player3UnitContainer.y-(cellsSprite2[i].y-gameBoxSize*0.3))<(gameBoxSize*0.2)
		)
		{
		cellSelectedID=i;
		cellsSprite2[i].alpha = 1;
		cellSelected=true;
		}
		else
		cellsSprite2[i].alpha = 0.5;
	//	cellSelected=false;
		}



}


for(let i=0; i<7; i++){
		cellsSprite3[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (4 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite3[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (3* (gameBoxSize*1.3)  * 0.25);
		cellsSprite3[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite3[i].height = (gameBoxSize*1.3)*0.5;

}


for(let i=0; i<7; i++){
		cellsSprite4[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (3 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite4[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (4* (gameBoxSize*1.3)  * 0.25);
		cellsSprite4[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite4[i].height = (gameBoxSize*1.3)*0.5;
}



for(let i=0; i<7; i++){
		cellsSprite5[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (2 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite5[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (5* (gameBoxSize*1.3)  * 0.25);
		cellsSprite5[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite5[i].height = (gameBoxSize*1.3)*0.5;
}


for(let i=0; i<7; i++){

		cellsSprite6[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (1 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite6[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (6* (gameBoxSize*1.3)  * 0.25);
		cellsSprite6[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite6[i].height = (gameBoxSize*1.3)*0.5;
}



for(let i=0; i<7; i++){
		cellsSprite7[i].x=(window.innerWidth/2 ) + ((gameBoxSize*1.3)*i * 0.5 ) -     (0 * (gameBoxSize*1.3)  * 0.5 );
		cellsSprite7[i].y=(window.innerHeight/2) + gameBoxSize + ((gameBoxSize*1.3)*i * 0.25) - (7* (gameBoxSize*1.3)  * 0.25);
		cellsSprite7[i].width  = (gameBoxSize*1.3)*1;
		cellsSprite7[i].height = (gameBoxSize*1.3)*0.5;
}


}


//ui cellS
{
icon1Sprite.width  = (gameBoxSize*1.0) * 1;
icon1Sprite.height = (gameBoxSize*1.0) * 0.5;
icon2Sprite.width  = (gameBoxSize*1.0) * 1;
icon2Sprite.height = (gameBoxSize*1.0) * 0.5;
icon3Sprite.width  = (gameBoxSize*1.0) * 1;
icon3Sprite.height = (gameBoxSize*1.0) * 0.5;



icon1Sprite.x = cellsSprite2[2].x ;
icon1Sprite.y = cellsSprite2[2].y ;
icon2Sprite.x = cellsSprite2[5].x ;
icon2Sprite.y = cellsSprite2[5].y ;
icon3Sprite.x = cellsSprite2[3].x ;
icon3Sprite.y = cellsSprite2[3].y ;



uiCellFillSprite1.width  = (gameBoxSize*1.3);
uiCellFillSprite1.height = (gameBoxSize*1.3);
uiCellFillSprite1.x = cellsSprite3[2].x - gameBoxSize*0.05;
uiCellFillSprite1.y = cellsSprite3[2].y - gameBoxSize*0.15;

uiCellFillSprite3.width  = (gameBoxSize*1.3);
uiCellFillSprite3.height = (gameBoxSize*1.3);
uiCellFillSprite3.x = cellsSprite3[1].x - gameBoxSize*0.05;
uiCellFillSprite3.y = cellsSprite3[1].y - gameBoxSize*0.15 ;

uiCellFillSprite4.width  = (gameBoxSize*1.3);
uiCellFillSprite4.height = (gameBoxSize*1.3);
uiCellFillSprite4.x = cellsSprite4[1].x - gameBoxSize*0.05;
uiCellFillSprite4.y = cellsSprite4[1].y  - gameBoxSize*0.15 ;


uiCellFillSprite2.width  = (gameBoxSize*1.3);
uiCellFillSprite2.height = (gameBoxSize*1.3);
uiCellFillSprite2.x = cellsSprite3[4].x - gameBoxSize*0.05;
uiCellFillSprite2.y = cellsSprite3[4].y - gameBoxSize*0.15 ;


uiCellFillSprite5.width  = (gameBoxSize*1.3);
uiCellFillSprite5.height = (gameBoxSize*1.3);
uiCellFillSprite5.x = cellsSprite3[6].x - gameBoxSize*0.05;
uiCellFillSprite5.y = cellsSprite3[6].y - gameBoxSize*0.15 ;

}






    // render the container
  renderer.render(stage);

}







});
