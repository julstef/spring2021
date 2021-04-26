class Orb{
  constructor() {
    this.r = 50
    this.x = width;
    this.y = height - 150;
  }
  move(){
    this.x -= 10 ;
  }
  show() {
    image(oImg, this.x, this.y, this.r, this.r)
  }
}

