function setup() {
  createCanvas(1000, 500);
  background("violet");
}

function draw() {
  fill("purple");
  stroke("lightblue");
  if (mouseIsPressed)
    circle(mouseX, mouseY, 30, 50);
}
