class Snow{
    constructor(){
        var options={
          isStatic:false

        }
        this.snow=Bodies.circle(random(1,1200),10,30,options)
        this.image=loadImage("snow5.webp")
    World .add(world,this.snow);
    }
    display(){
        imageMode(CENTER)
        image (this.image,this.snow.position.x,this.snow.position.y,30,30)
        }
}