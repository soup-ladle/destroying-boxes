class pig {
    constructor(x,y) {
        var pigOptions = {
            "restitution": 0.8,
            "friction": 0.3,
            "density": 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,pigOptions)
        this.width = 50;
        this.height = 50;
        World.add(myWorld,this.body)
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        rectMode(CENTER)
        fill("green");
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.width,this.height)
        pop()
    }
}

