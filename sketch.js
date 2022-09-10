
var bgcolor;
var input;


var button;

function setup(){
  createCanvas(700,700);
  background(0);
  bgcolor = color(255, 0,150,20);
  
  button = createButton('Change My Color <3','100');
  button.mousePressed(changeColor);
  

  input = createInput("");
  input.input(updateText);
  
}
function updateText() {
  nameP.html(input.value());
}

function changeColor(){
  bgcolor = color(random(255), 0, random(50), 20);

}
function draw(){
  
  translate(width/2, height/2);
  fill(bgcolor,20);
  strokeWeight(2)
  stroke(255);
  beginShape();

  for(var a = 0 ; a < TWO_PI ; a+=0.01){
    var r = 20;
    var x = r*(16 *pow(sin(a),3));
    var y = -r*(13 *cos(a)-5*cos(2*a)-2*cos(3*a)-cos(4*a));
    vertex(x, y);
  
  }
  endShape();
  fill(0);
  stroke(255);

  textSize(64);
  textAlign(0, 100);
  textFont('Georgia');
  text(input.value(),-120,20);

}