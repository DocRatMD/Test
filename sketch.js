let leftChar,rightChar,upchar,downchar;
let char;
let dir;
let leftwalk,rightwalk,upwalk,downwalk;
let isStopped;

function preload() {
  leftChar = loadImage('assets/leftchar.png');
  rightChar = loadImage('assets/rightchar.png');
  upchar = loadImage('assets/upchar.png');
  downchar = loadImage('assets/downchar.png');
  dir = loadImage('assets/downchar.png');
  leftwalk = loadAnimation('assets/leftwalk/leftwalk0001.png','assets/leftwalk/leftwalk0004.png');
  rightwalk = loadAnimation('assets/rightwalk/rightwalk0001.png','assets/rightwalk/rightwalk0004.png');
  upwalk = loadAnimation('assets/upwalk/upwalk0001.png','assets/upwalk/upwalk0006.png');
  downwalk = loadAnimation('assets/downwalk/downwalk0001.png','assets/downwalk/downwalk0004.png');
}

function setup() {
createCanvas(1200,800);
isStopped = true;
imageMode(CENTER);
char = new Char(width/2,height/2);
}

function draw() {
  background(100);
  char.show();
  char.move();
  //animation(leftwalk, width/2,height/2);
  //animation(leftwalk,100,100);

}

function keyReleased() {
  isStopped = true;
}
