var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4;
var cars = [];

function preload(){

  car1Image = loadImage("1.png");

  car2Image = loadImage("2.png");

  car3Image = loadImage("3.png");

  car4Image = loadImage("4.png");

  trackImage = loadImage("Track.jpg")
}




function setup(){
  
  canvas = createCanvas(displayWidth,displayHeight);
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
}
