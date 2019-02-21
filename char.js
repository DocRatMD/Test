function Char(x,y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    //image(dir,x,y,104,176);
    if (keyIsPressed === false && startVar == true) {
      image(dir,x,y,104,176);
    }
    if (isStoppedDown == true && isWalkingUp == false && isWalkingDown == false && isWalkingLeft == false && isWalkingRight == false) {
      isStoppedUp = false;
      isStoppedLeft = false;
      isStoppedRight = false;
      image(picArray[3],x,y,104,176);
    }
    if (isStoppedUp == true && isWalkingUp == false && isWalkingDown == false && isWalkingLeft == false && isWalkingRight == false) {
      isStoppedDown = false;
      isStoppedLeft = false;
      isStoppedRight = false;
      image(picArray[2],x,y,104,176);
    }
    if (isStoppedLeft == true && isWalkingUp == false && isWalkingDown == false && isWalkingLeft == false && isWalkingRight == false) {
      isStoppedDown = false;
      isStoppedUp = false;
      isStoppedRight = false;
      image(picArray[0],x,y,104,176);
    }
    if (isStoppedRight == true && isWalkingUp == false && isWalkingDown == false && isWalkingLeft == false && isWalkingRight == false) {
      isStoppedDown = false;
      isStoppedLeft = false;
      isStoppedUp = false;
      image(picArray[1],x,y,104,176);
    }
  }

  this.move = function() {


    if (aKey && wKey == false && sKey == false && dKey == false && 0 <= x - 30) {
    x -= 3;
    animation(leftwalk,x,y);
    isStoppedDown = false;
    isStoppedUp = false;
    isStoppedLeft = true;
    isStoppedRight = false;
    isWalkingLeft = true;
  }

    if (dKey && aKey == false && sKey == false && wKey == false && width >= x + 30) {
    x += 3;
    animation(rightwalk,x,y);
    isStoppedDown = false;
    isStoppedUp = false;
    isStoppedLeft = false;
    isStoppedRight = true;
    isWalkingRight = true;
}

if (wKey && aKey == false && sKey == false && dKey == false && 0 <= y - 55) {
  y -= 3;
  animation(upwalk,x,y);
  isStoppedDown = false;
  isStoppedUp = true;
  isStoppedLeft = false;
  isStoppedRight = false;
  isWalkingUp = true;
}

if (sKey && wKey == false && aKey == false && dKey == false && height >= y + 50) {
    y += 3;
    animation(downwalk,x,y);
    isStoppedDown = true;
    isStoppedUp = false;
    isStoppedLeft = false;
    isStoppedRight = false;
    isWalkingDown = true;
    }
if (wKey && sKey) {
  isStoppedDown = true;
  isStoppedUp = false;
  isWalkingDown = false;
  isWalkingUp = false;
}
if (aKey && dKey) {
  isStoppedDown = true;
  isStoppedUp = false;
  isStoppedLeft = false;
  isStoppedRight = false;
  isWalkingDown = false;
  isWalkingLeft = false;
  isWalkingRight = false;
  isWalkingUp = false;
}
if ((sKey && dKey) || (sKey && aKey)) {
  isStoppedDown = true;
  isStoppedUp = false;
  isStoppedLeft = false;
  isStoppedRight = false;
  isWalkingDown = false;
  isWalkingLeft = false;
  isWalkingRight = false;
  isWalkingUp = false;
}
if ((wKey && dKey) || (wKey && aKey)) {
  isStoppedDown = false;
  isStoppedUp = true;
  isStoppedLeft = false;
  isStoppedRight = false;
  isWalkingDown = false;
  isWalkingLeft = false;
  isWalkingRight = false;
  isWalkingUp = false;
}
  }
}
