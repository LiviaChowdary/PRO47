
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;
var gameLogo,nurseLogo,killerLogo,detectiveLogo,civilianLogo,jdodmd,backSound;
var player1Vote,player2Vote,player3Vote,player4Vote;
var allVotes;


function preload()
{
	gameLogo = loadImage("mysteryLogo.png");
	nurseLogo = loadImage("nurse.png");
	killerLogo = loadImage("killer.png");
	detectiveLogo = loadImage("detective.png");
	captainImg = loadImage("captain.png");
	civilianLogo = loadImage("civillian.png");
//	backSound = loadSound("mysterymafiaSound.wav");
	backgroundImage = loadImage("background.jpg");
}

function setup(){
	canvas = createCanvas(displayWidth-150, displayHeight-250);
	database = firebase.database();
	game = new Game();
	game.getState();
	game.start();
  }
  
  
  function draw(){
	if(playerCount === 4){
	  game.update(1);
	}
	if(gameState === 1){
	  clear();
	  game.play();
	}
	/*if(gameState === 2){
	  game.end();
	  
	}*/
  }
  



