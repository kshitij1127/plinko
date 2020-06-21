class Plinko{
    constructor(x,y){
       var options = {
           isStatic : true
       }
       this.radius = 10
       this.body = Bodies.circle(x,y,this.radius,options)
       World.add(world,this.body)
    }
    display(){
        var position = this.body.position
        var angle = this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)
        ellipseMode(CENTER)
        fill("white")
        ellipse(0,0,this.radius)
        pop()
    }
}