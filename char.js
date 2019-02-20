function Char(x,y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    //image(dir,x,y,104,176);
    if (isStopped === true) {
      image(dir,x,y,104,176);
    }
  }

  this.move = function() {


    if (keyIsDown(65) && 0 <= x - 30) {
    x -= 3;
    //dir = loadImage('assets/leftchar.png');
    animation(leftwalk,x,y);
    isStopped = false;
  }

    if (keyIsDown(68) && width >= x + 30) {
    x += 3;
    //dir = loadImage('assets/rightchar.png');
    animation(rightwalk,x,y);
    isStopped = false;
}

if (keyIsDown(87) && 0 <= y - 55) {
  y -= 3;
  //dir = loadImage('assets/upchar.png');
  animation(upwalk,x,y);
  isStopped = false;
}

if (keyIsDown(83) && height >= y + 50) {
    y += 3;
    animation(downwalk,x,y);
    isStopped = false;
    }
  }
}
