class Rope{
    constructor(pointA,bodyB){
        var options={
            pointA:pointA,
            bodyB:bodyB,
            length:10,
            stiffness:0.8,
            isStatic:true
        }
        this.pointA = pointA;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.pointA;
        var pointB = this.chain.bodyB.position;
        
        strokeWeight(4);
        
        
        line(pointA.x,pointA.y,pointB.x,pointB.y-15);
    }
}