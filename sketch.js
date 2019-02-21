let leftchar,rightchar,upchar,downchar;
let char;
let dir;
let picArray;
let startVar;
let leftwalk,rightwalk,upwalk,downwalk;
let isStoppedLeft,isStoppedRight,isStoppedUp,isStoppedDown;

function preload() {
  leftchar = loadImage('assets/leftchar.png');
  rightchar = loadImage('assets/rightchar.png');
  upchar = loadImage('assets/upchar.png');
  downchar = loadImage('assets/downchar.png');
  dir = loadImage('assets/downchar.png');
  picArray = [loadImage('assets/leftchar.png'),loadImage('assets/rightchar.png'),loadImage('assets/upchar.png'),loadImage('assets/downchar.png')];
  leftwalk = loadAnimation('assets/leftwalk/leftwalk0001.png','assets/leftwalk/leftwalk0004.png');
  rightwalk = loadAnimation('assets/rightwalk/rightwalk0001.png','assets/rightwalk/rightwalk0004.png');
  upwalk = loadAnimation('assets/upwalk/upwalk0001.png','assets/upwalk/upwalk0006.png');
  downwalk = loadAnimation('assets/downwalk/downwalk0001.png','assets/downwalk/downwalk0006.png');
}



function setup() {
createCanvas(1200,800);
startVar = true;
isStoppedDown = false;
isStoppedUp = false;
isStoppedLeft = false;
isStoppedRight = false;
// if (isStoppedUp == false && isStoppedDown == false && isStoppedLeft == false && isStoppedRight == false){
//   image(dir,Char.x,Char.y,104,176);
// }
imageMode(CENTER);
char = new Char(width/2,height/2);
}

function draw() {
  background(100);
  char.move();
  char.show();
}

function keyReleased() {
  startVar = false;
}
