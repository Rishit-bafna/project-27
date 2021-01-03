class bob{
    constructor(x,y,r){
         var options={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2, 
         }
         this.x = x;
         this.y = y;
         this.r = r;
         this.body = Bodies.circle(this.x,this.y,25,options);
         World.add(world,this.body);
    }
    display(){
        push()
        var pos=this.body.position;
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(1);
        stroke(0);
        fill(255,0,254);
        ellipse(0,0,this.r,this.r);
        pop()
    }
};