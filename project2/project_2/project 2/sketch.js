let table, sprites = [];
const baseScale = 0.1, hoverGrow = 1.2, speed = 0.12;
let bg;
let selectedSprite = null;

function preload() {
  table = loadTable("assets/sampledata.csv", "csv", "header");
  bg = loadImage("assets/bg.gif");
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(12);

  for (let r = 0; r < table.getRowCount(); r++) {
    const file = (table.getString(r, "file") || "").trim();
    const activity = (table.getString(r, "activity") || "").trim();
    const cal125lbs = (table.getString(r, "cal125lbs") || "").trim();
    const cal155lbs = (table.getString(r, "cal155lbs") || "").trim();
    const cal185lbs = (table.getString(r, "cal185lbs") || "").trim();
    const xCSV = Number((table.getString(r, "x") || "").trim());
    const yCSV = Number((table.getString(r, "y") || "").trim());

    const s = {
      file,
      activity,
      cal125lbs,
      cal155lbs,
      cal185lbs,
      img: null,
      ready: false,
      x: isNaN(xCSV) ? random(90, width - 90) : xCSV,
      y: isNaN(yCSV) ? random(90, height - 90) : yCSV,
      scaleNow: baseScale
    };

    s.img = loadImage(
      file,
      () => (s.ready = true),
      (e) => console.error("Failed:", file, e)
    );

    sprites.push(s);
  }
}

function draw() {
  background(236);

  // Background (selected GIF or default)
  if (selectedSprite && selectedSprite.ready) {
    image(selectedSprite.img, width / 2, height / 2, width, height);
  } else {
    image(bg, width / 2, height / 2, width, height);
  }

  // Only show icons when none is selected
  if (!selectedSprite) {
    for (const s of sprites) {
      const w = (s.ready ? s.img.width : 180) * s.scaleNow;
      const h = (s.ready ? s.img.height : 120) * s.scaleNow;

      const hovering =
        Math.abs(mouseX - s.x) <= w / 2 && Math.abs(mouseY - s.y) <= h / 2;
      s.scaleNow = lerp(
        s.scaleNow,
        hovering ? baseScale * hoverGrow : baseScale,
        speed
      );

      push();
      translate(s.x, s.y);
      scale(s.scaleNow);
      if (s.ready) {
        image(s.img, 0, 0);
      } else {
        noStroke();
        fill(200);
        rectMode(CENTER);
        rect(0, 0, 260, 160, 12);
        fill(255);
        text("Loading...", 0, 0);
      }
      pop();
    }
  }

  // When a GIF is selected
  if (selectedSprite) {
    // Fade overlay for clarity
    push();
    fill(0, 100); // slight dark overlay
    rect(0, 0, width, height);
    pop();

    // Semi-transparent white info box
    push();
    noStroke();
    fill(255, 230);
    rectMode(CENTER);
    rect(width / 2, height / 2, width * 0.7, 220, 25);
    pop();

    // Centered text content
    push();
    fill(0);
    textAlign(CENTER, CENTER);
    stroke(255);
    strokeWeight(3);
    textSize(28);
    text(selectedSprite.activity, width / 2, height / 2 - 60);

    noStroke();
    fill(20);
    textSize(20);
    text(
      `Calories burned per hour:\n125 lbs: ${selectedSprite.cal125lbs}\n155 lbs: ${selectedSprite.cal155lbs}\n185 lbs: ${selectedSprite.cal185lbs}`,
      width / 2,
      height / 2 + 20
    );
    pop();

    // "Back" button (top right)
    push();
    fill(255, 240);
    stroke(80);
    rectMode(CENTER);
    rect(width - 70, 40, 100, 40, 10);
    noStroke();
    fill(0);
    textSize(16);
    text("Back", width - 70, 40);
    pop();
  }
}

function mousePressed() {
  if (selectedSprite) {
    // Check if "Back" clicked
    if (
      mouseX > width - 120 && mouseX < width - 20 &&
      mouseY > 20 && mouseY < 60
    ) {
      selectedSprite = null;
      return;
    }
  }

  // Check if an image was clicked
  for (let i = sprites.length - 1; i >= 0; i--) {
    const s = sprites[i];
    const w = (s.ready ? s.img.width : 180) * s.scaleNow;
    const h = (s.ready ? s.img.height : 120) * s.scaleNow;
    const inside =
      Math.abs(mouseX - s.x) <= w / 2 && Math.abs(mouseY - s.y) <= h / 2;
    if (inside) {
      selectedSprite = s;
      break;
    }
  }
}
