class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'density':30,
		'friction': 3.0,
		'restitution':0.8
	  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r-20, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}