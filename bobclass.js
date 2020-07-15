class Bob{
constructor(x,y){
    var options={
        isStatic:true
    }
    this.body = Bodies.circle(x,y,30,options);
    this.radius=30;
    World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    fill("blue");
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius);
}

}
