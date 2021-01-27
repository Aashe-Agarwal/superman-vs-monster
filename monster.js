class Monster {
    constructor(x,y,radius) {
      var options = {
         'restitution':0.8,
         'friction':1.0,
         'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius= radius;
      this.image=loadImage("images/Monster-01.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y-100, this.radius+150, this.radius);
    }
  }