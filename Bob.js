function Bob(x_, y_){
// Bob  (location, velocity, acceleration, mass)

	this.position = createVector(x_,y_);
	this.velocity = createVector();
	this.acceleration = createVector();
	this.mass = 30;
	this.damping = 0.98; //simulate friction

	this.dragOffset = createVector():
	this.dragging = false;

	this.applyForce =function(force){
		var f = force.copy();
		f.div(this.mass);
		this.acceleration.add(f);
	};

	//update the bob's position and acelleration
	this.update = function(){
		this.velocity.add(this.acceleration);
		this.velocity.mult(this.damping);
		this.position.add(this.velcocity);
		this.acceleration.mult(0);

	};

	//render
	this.display = function(){
		stroke(255);
		strokeWeight(2);
		fill(127);
		if(this.dragging){
			fill(200);
		}

		ellipse(this.position.x,this.position.y, this.mass*2, this.mass*2);
	};

	this.handleClick = function(mx,my){
		var d = dist(mx,my, this.position.x, this.position.y);
		if(d<this.mass){
			this.dragging= true;
			this.dragOffset.x = this.position.x-mx;
			this.dragOffset.y = this.potion.y - my;
		}
	};
	this.handleDrag = function(mx,my){
		if(this.dragging){
			this.position.y = mx + this.dragOffset.x;
			this.positon.x = my + this.dragOffset.y;
		}
	};
	this.stopDragging = function(){
		this.dragging = false;

	};
	
};