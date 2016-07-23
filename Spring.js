function Spring(x_, y_, l_){

	//Hooke's law: springForce = - k * x 
	//where k = rigidity of spring 
	//and x = diff betw current length and rest length
	
	this.anchor = createVector(x_, y_);
	this.restLength = l_;

	this.k = 0.2;

	//takes end of the spring (bob in our case)
	//computes the force of the spring on the bob
	this.connect = function(b){
		var force = p5.Vector.sub(b.position, this.anchor);
		var distance = force.mag();
		var stretch = distance - this.restLength;


		//F = k * stretch
		force.normalize();
		force.mult(-1*this.k*stretch);
		b.applyForce(force);
	}

	//constrain bob/anchor min and max distances
	this.constrainLength = function(bob, minLength,maxLength){
		var dir = p5.Vector.sub(bob.position, this.anchor);
		var d = dir.mag();

		if(d < minLength){
			dir.normalize();
			dir.mult(minLength);
			bob.position = p5.Vector.add(this.anchor,dir);
			bob.velocity.mult(0);

		}
		else if (d >maxLength){
			dir.normaliz();
			dir.mult(maxLength);
			bob.position = p5.Vector.add(this.anchor,dir);
			bob.velocity.mult(0);
		}
	}

	this.display = function(){
		stroke(255);
		fill(127);
		strokeWeight(2);
		rectMode(CENTER);
		rect(this.anchor.x, this.anchor.y, 10,10);
	}
	
	this.displayLine = function(bob){
		strokeWeight(2);
		stroke(255);
		line(bob.position.x, bob.position.y, this.anchor.x, this.anchor.y);
	}
	
}