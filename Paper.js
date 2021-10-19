class Paper{
	constructor(x,y,r)
	{
		var options = {
            'isStatic': false,
			'density':1.2,
			'friction':1,
			'restitution':0.3
		  };
		this.x=x;
		this.y=y;
        this.r=r+15;
		this.body=Bodies.circle(this.x, this.y,(this.r-20), options)
		World.add(world, this.body);
        this.image = loadImage("paper.png");

	}
	display()
	{
			var pos=this.body.position;		
			push()
			fill("white");
            imageMode(CENTER)
			image(this.image,pos.x,pos.y,2*this.r+5,2*this.r+5)
			pop()
	}

}