function Char(x,y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    image(dir,x,y,104,176);
  }

  this.move = function() {
    if (keyIsDown(65) && 0 <= x - 30) {
    x -= 3;
    //dir = loadImage('assets/leftchar.png');
    animation(leftwalk,x,y);
    if (keyIsDown(16)) {
      x -= 6;
    }
  }

    if (keyIsDown(68) && width >= x + 30) {
    x += 3;
    //dir = loadImage('assets/rightchar.png');
    animation(rightwalk,x,y);
  if (keyIsDown(16)) {
    x += 6;
  }
}

if (keyIsDown(87) && 0 <= y - 55) {
  y -= 3;
  dir = loadImage('assets/upchar.png');
  if (keyIsDown(16)) {
    y -= 6;
  }
}

if (keyIsDown(83) && height >= y + 50) {
  y += 3;
  dir = loadImage('assets/downchar.png');
  if (keyIsDown(16)) {
y += 6;
  }
}
  }
}
