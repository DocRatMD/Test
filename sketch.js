let leftChar,rightChar,upchar,downchar;
let char;
let dir;
let leftwalk,rightwalk,upwalk,downwalk;

function preload() {
  leftChar = loadImage('assets/leftchar.png');
  rightChar = loadImage('assets/rightchar.png');
  upchar = loadImage('assets/upchar.png');
  downchar = loadImage('assets/downchar.png');
  dir = loadImage('assets/rightchar.png');
  leftwalk = loadAnimation('assets/leftwalk/leftwalk0001.png','assets/leftwalk/leftwalk0002.png');
  rightwalk = loadAnimation('assets/rightwalk/rightwalk0001.png','assets/rightwalk/rightwalk0002.png');
}

function setup() {
createCanvas(1200,800);
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
