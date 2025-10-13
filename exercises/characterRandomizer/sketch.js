let base;
let hat1;
let hat2;
let hat3;
let pants1;
let pants2;
let pants3;
let shirt1;
let shirt2;
let shirt3;

let hat_id;
let pants_id;
let shirt_id;



function preload(){
  base = loadImage("base.png");

  // character 1
  hat1 = loadImage("hat1.png");
  shirt1 = loadImage("shirt1.png");
  pants1 = loadImage("pants1.png");

  // character 2
  hat2 = loadImage("hat2.png");
  shirt2 = loadImage("shirt2.png");
  pants2 = loadImage("pants2.png");

  // character 3
  hat3 = loadImage("hat3.png");
  shirt3 = loadImage("shirt3.png");
  pants3 = loadImage("pants3.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {

  image(base, 0, 0, 400, 400);

  if (hat_id == 1){
    image(hat1, 0, 0, 400, 400);
  } else if (hat_id == 2){
    image(hat2, 0, 0, 400, 400);
  } else if (hat_id ==3){
    image(hat3, 0, 0, 400,400);
  }

  if (shirt_id == 1){
    image(shirt1, 0, 0, 400, 400);
  } else if (shirt_id == 2){
    image(shirt2, 0, 0, 400, 400);
  } else if (shirt_id == 3){
    image(shirt3, 0, 0, 400, 400); 
  }

  if (pants_id == 1){
    image(pants1, 0, 0, 400, 400);
  } else if (pants_id == 2){
    image(pants2, 0, 0, 400, 400);
  } else if (pants_id == 3){
    image(pants3, 0, 0, 400, 400);
  }


  if (keyIsDown(LEFT_ARROW)) {
    shufflehat();
  }

  if (keyIsDown(UP_ARROW)) {
    shufflepants();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    shuffleshirt();
  }

  function shufflehat() {
  hat_id = int(random(1, 4));
}

function shuffleshirt() {
  shirt_id = int(random(1, 4));
}

function shufflepants() {
  pants_id = int(random(1, 4));
}
}
