let molds = []; let num = 4000;
let d; 
let canvas;

function setup() {
  // Create canvas and attach it to the container
  canvas = createCanvas(600, 600);
  canvas.parent('canvas-container');
  angleMode(DEGREES);
  d = pixelDensity();
  
  for (let i=0; i<num; i++) {
    molds[i] = new Mold();
  } 
}

function draw() {
  background(0, 5);
  loadPixels();
  
  for (let i=0; i<num; i++) {
    if (key == "s" || key == "S") { // If "s" key is pressed, molds stop moving 
      molds[i].stop = true;
      updatePixels();
      noLoop();
    } else {
      molds[i].stop = false;
    }
    
    molds[i].update();
    molds[i].display();
  }
  
}

// Resume simulation when any other key is pressed
function keyPressed() {
  if (key !== "s" && key !== "S") {
    loop();
  }
}