class Rock{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'density':12,
		'friction': 0.9,
		'restitution':0.8
	  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r-20, options);
        this.image=loadImage("rock.png");
        this.image.scale=0.5;
		World.add(world, this.body);

	}
	display()
	{
			var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);
			imageMode(CENTER)
			
			
			
			//draw the ellipse here to display the rubber ball
            image(this.image,0,0,this.r);
			pop()
	}

}