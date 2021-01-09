class Monster {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            density: 1,
            friction: 0.5
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("sprites/Monster-01.png");
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}