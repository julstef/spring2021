let alien;
let aImg;
let fImg;
let bImg;
let gameover;
let fire = [];
let music;
let oImg;
let orb = [];
let s;
let collect;
let loss; 
let victory;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  aImg = loadImage('alien.png');
  fImg = loadImage('fire.png');
  bImg = loadImage('planet.jpg');
  music = loadSound('epic.mp3')
  oImg = loadImage('orb.png');
  s = loadFont('star.ttf');
  collect = loadSound('collect.mp3');
  loss = loadSound('loss.mp3');
  victory = loadSound('victory.mp3')
}

function mouseclick() {
  fire.push(new fire());
  orb.push(new orb());
}

function setup() {
  createCanvas (800, 450);
  alien = new Alien();
  music.play()
}

function command(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    alien.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    alien.jump();
    }

}

var hit = 0

function draw(){
  if (random(1) < 0.005) {
    fire.push(new Fire());
  }
  if (random(1) < 0.0025) {
    orb.push(new Orb());
  }
  
  background(bImg);
  textSize(20);
  fill('rgb(255, 255, 255')
  text('space to jump, dodge fire,\n collect 50 orb points to escape the planet!', 40, 30)
  textFont(s,50);
      fill('rgb(0,255,0)');
      text(hit, 700, 75);
  
  for (let o of orb) {
    o.move();
    o.show();
    if (alien.hits(o)) {
      console.log('hit!')
      hit += 1;
      collect.play()
    }
  } 
  if (hit == 51) {
    music.stop();
    fill('rgb(255, 204, 0)')
    text('you win!', width / 2, height / 2);
    victory.play()
    noLoop();
  }
  for (let f of fire) {
    f.move();
    f.show();
    if (alien.hits(f)) {
      console.log('game over');
      music.stop();
      fill('rgb(255, 204, 0)')
      text('game over!', width / 2, height / 2);
      loss.play()
      noLoop();
    }
  }
  alien.show();
  alien.move();
}
