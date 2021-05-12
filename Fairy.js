class Fairy{
	constructor(x,y){
	var options={
	
	}
	this.image = loadimage("images/fairy.jpg.");
	}
	display(){
		imageMode(CENTER);
		image(this.image,pos.x,pos.y,400,400);
	}
}