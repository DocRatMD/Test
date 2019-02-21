function Char(x,y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    //image(dir,x,y,104,176);
    if (keyIsPressed === false && startVar == true) {
      image(dir,x,y,104,176);
    }
    if (isStoppedDown == true) {
      isStoppedUp = false;
      isStoppedLeft = false;
      isStoppedRight = false;
      image(picArray[3],x,y,104,176);
    }
    if (isStoppedUp == true) {
      isStoppedDown = false;
      isStoppedLeft = false;
      isStoppedRight = false;
      image(picArray[2],x,y,104,176);
    }
    if (isStoppedLeft == true) {
      isStoppedDown = false;
      isStoppedUp = false;
      isStoppedRight = false;
      image(picArray[0],x,y,104,176);
    }
    if (isStoppedRight == true) {
      isStoppedDown = false;
      isStoppedLeft = false;
      isStoppedUp = false;
      image(picArray[1],x,y,104,176);
    }
  }

  this.move = function() {


    if (keyIsDown(65) && 0 <= x - 30) {
    x -= 3;
    animation(leftwalk,x,y);
    isStoppedDown = false;
    isStoppedUp = false;
    isStoppedLeft = true;
    isStoppedRight = false;
  }

    if (keyIsDown(68) && width >= x + 30) {
    x += 3;
    animation(rightwalk,x,y);
    isStoppedDown = false;
    isStoppedUp = false;
    isStoppedLeft = false;
    isStoppedRight = true;
}

if (keyIsDown(87) && 0 <= y - 55) {
  y -= 3;
  animation(upwalk,x,y);
  isStoppedDown = false;
  isStoppedUp = true;
  isStoppedLeft = false;
  isStoppedRight = false;
}

if (keyIsDown(83) && height >= y + 50) {
    y += 3;
    animation(downwalk,x,y);
    isStoppedDown = true;
    isStoppedUp = false;
    isStoppedLeft = false;
    isStoppedRight = false;
    }
  }
}
