class Ball {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y,50,50,options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke ('blue');
      strokeWeight(4);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
     
   };
   function keyPressed() {
    if (keyCode === UP_ARROW) { 
     Matter.Body.applyForce(ball.Body,ball.Body.position,{x:85,y:-85});
    }
  }  

