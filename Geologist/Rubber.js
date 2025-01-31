class Rubber{
	constructor(x,y,radius){
		var options = {
			'density':0.3,
			'friction': 5,
			'restitution':1
		}
	
	
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=radius
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	
}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS)
			ellipse(0,0,this.r,this.r)

			pop()
	}
}
