class Drop{
    constructor(x,y){
        var options={
            isStatic: false,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,50, options);
        World.add(world, this.body);    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,50,50);
    pop();
}
update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
}        
}