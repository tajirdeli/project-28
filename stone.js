class Stone{
    constructor() {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(60,586,50,50, options);
        //this.width = width;
        //this.height = height;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 60,586 ,50,50);
        pop();
      }
}