class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        //stroke("white");
        strokeWeight(0);
        line(pointB.x, pointB.y, pointA.x, pointA.y-30);
        pop();

    }
}