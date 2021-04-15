class Elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.Elastic= Constraint.create(options);
        World.add(world, this.Elastic);
    }


      display(){
       if(this.Elastic.bodyA){


            var pointA = this.Elastic.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
}
        
    }
    
    fly(){
        this.Elastic.bodyA=null;
    }
}