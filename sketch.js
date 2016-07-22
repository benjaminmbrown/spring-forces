var bob;
var spring;

function setup() {
 createCanvas(640, 360);
 bob = new Bob();
 spring = new Spring(width/2, 10, 100);

}

function draw(){
	background(51);
	var gravity = createVector(0,2);

	bob.applyForce(gravity);

	spring.connect(bob);


	bob.update();
	//draw

	//spring.displayLine(bob);
	bob.display();
	spring.display();

}

function mousePressed(){
	bob.handleClick(mouseX, mouseY)

}

function mouseDragged(){
	bob.handleDrag(mouseX,mouseY)
}

function mouseReleased(){
	bob.stopDragging()
	
}