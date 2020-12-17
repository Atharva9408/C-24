class Bird
{
    constructor(x,y,w,h){
    var OP={'restitution':0.8,'friction':1.0,'density':1.0}
    this.body=Bodies.rectangle(x,y,w,h,OP);
    World.add(world,this.body);

    }
    display()
    {
        var p=this.body.position;
        p.x=mouseX;
        p.y=mouseY
        var a=this.body.angle;
        push();                        //for new setting
        translate(p.x,p.y);            //to change the position
        rotate(a);                     // to change the angle
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green")
        fill("red")
        rect(0,0,70,70);
        pop();                         // change settings to zero   
    }
};