function Spring(x_, y_, l_){

	//Hooke's law: springForce = - k * x 
	//where k = rigidity of spring 
	//and x = diff betw current length and rest length
	
	this.anchor = createVector(x_, y_);
	this.restLength = l_;

	this.k = 0.2;

	//takes end of the spring (bob in our case)
	//computes the force of the spring on the bob
	this.connect = function(bob){

	}

	//constrain bob/anchor min and max distances
	this.constrainLength = function(bob, minLength,maxLength){

	}

	this.display = function(){

	}
	
}