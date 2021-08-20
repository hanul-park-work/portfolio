var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var inc = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  pixelDensity(1);
}

function draw() {
  clear();

  const animation = map(millis(), 0, 1000, 0, 2 * PI);
  const motion = sin(animation) * 0.5;

  loadPixels();
  var xoff = animation;
  for (var x = 0; x < width; x++) {
    var yoff = motion;
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff + mouseX, yoff + mouseY) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      yoff += inc;
    }
    xoff += inc;
  }
  updatePixels();
}
