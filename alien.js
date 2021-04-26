class Alien {
  constructor() {
    this.r = 100;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
    
  }
  
  jump() {
    if (this.y == height - this.r) {
      this.vy = -32;
    }
  } 
  
  hits(fire){
    return collideRectRect(this.x, this.y, this.r, this.r, fire.x, fire.y, fire.r, fire.r);
  }
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  
  show(){
    image(aImg, this.x, this.y, this.r, this.r);
  }
}