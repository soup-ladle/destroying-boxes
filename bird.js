class bird {
    constructor(x,y) {
        var birdOptions = {
        "resitiution": 0.8,
        "density": 1.5,
        "friction": 1
        }
    this.body = Bodies.rectangle(x,y,50,50,birdOptions)
    this.width = 50
    this.height = 50
    World.add(myWorld,this.body)
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        pos.x = mouseX
        pos.y = mouseY
        push()
        rectMode(CENTER)
        fill("red");
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.width,this.height)
        pop()
    }
}