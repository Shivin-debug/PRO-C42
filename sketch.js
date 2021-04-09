var hr, min, sec;
var hrA, minA, secA;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(200, 200);
  rotate(-90);
  
  hr = hour();
  min = minute();
  sec = second();

  secA = map(sec, 0, 60, 0, 360);
  hrA = map(hr%12, 0, 12, 0, 360);
  minA = map(min, 0, 60, 0, 360);

  push();
  rotate(secA);
  stroke("purple");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hrA);
  stroke("lightgreen");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(minA);
  stroke("cyan");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  strokeWeight(10);
  stroke("purple");
  arc(0, 0, 300, 300, 0, secA);

  stroke("cyan");
  arc(0, 0, 280, 280, 0, minA);

  stroke("lightgreen");
  arc(0, 0, 260, 260, 0, hrA);

  drawSprites();
}