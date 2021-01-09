class Block {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.2,
            density: 0.5,
            friction: 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(2);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();

    }
}