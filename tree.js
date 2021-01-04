class Tree{
    constructor() {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(600,500,400,400, options);
        //this.width = width;
        //this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 600,500,400,400);
        pop();
      }
}