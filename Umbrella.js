class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,50, options);
        this.image = loadImage("images/images/WalkingFrame/walking_2.png")
        World.add(world, this.body);    }
        
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 100);
    }
   
   
   
   
    }
