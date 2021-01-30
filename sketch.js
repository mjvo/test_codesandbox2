/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  // Put drawings here
  let c = color(255, 204, 0);
  fill(c);
  noStroke();
  rect(50, 50, 270, 250);
  fill(255);
  textStyle(BOLD);
  textSize(140);
  text("test", 60, 250);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
