class Pig
{
    constructor(x,y,w,h){
     var OP={'restitution':0.8,'friction':0.3,'density':1.0}
    this.body=Bodies.rectangle(x,y,w,h,OP);
    this.height=h;
    this.widht=w;
    World.add(world,this.body);

    }
    display()
    {
        var p=this.body.position;
        var a=this.body.angle;
        push();                        //for new setting
        translate(p.x,p.y);            //to change the position
        rotate(a);                     // to change the angle
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue")
        fill("green")
        rect(0,0,this.widht,this.height);
        pop();                         // change settings to zero   
    }
};