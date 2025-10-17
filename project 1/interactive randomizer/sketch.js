let bg1, bg2, bg3;
let cube1, cube2, cube3;
let grass1, grass2, grass3;

let bg_id = 1;
let cube_id = 1;
let grass_id = 1;

function preload() {
  bg1 = loadImage("bg1.png");
  bg2 = loadImage("bg2.png");
  bg3 = loadImage("bg3.png");

  cube1 = loadImage("cube1.png");
  cube2 = loadImage("cube2.png");
  cube3 = loadImage("cube3.png");

  grass1 = loadImage("grass1.png");
  grass2 = loadImage("grass2.png");
  grass3 = loadImage("grass3.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Draw background
  if (bg_id == 1) {
    image(bg1, 0, 0, 400, 400);
  } else if (bg_id == 2) {
    image(bg2, 0, 0, 400, 400);
  } else if (bg_id == 3) {
    image(bg3, 0, 0, 400, 400);
  }


  // Draw grass
  if (grass_id == 1) {
    image(grass1, 0, 0, 400, 400);
  } else if (grass_id == 2) {
    image(grass2, 0, 0, 400, 400);
  } else if (grass_id == 3) {
    image(grass3, 0, 0, 400, 400);
  }

    // Draw cube
  if (cube_id == 1) {
    image(cube1, 0, 0, 400, 400);
  } else if (cube_id == 2) {
    image(cube2, 0, 0, 400, 400);
  } else if (cube_id == 3) {
    image(cube3, 0, 0, 400, 400);
  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    shufflegrass();
  } else if (keyCode === RIGHT_ARROW) {
    shufflecube();
  } else if (keyCode === UP_ARROW) {
    shufflebg();
  }
}

function shufflegrass() {
  grass_id = int(random(1, 4));
}

function shufflecube() {
  cube_id = int(random(1, 4));
}

function shufflebg() {
  bg_id = int(random(1, 4));
}
