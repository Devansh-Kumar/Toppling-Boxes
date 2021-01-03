class Ground{
constructor(){
var options ={
isStatic : true    
}    
this.body = Bodies.rectangle(200,380,400,20,options);
World.add(world,this.body);
} 
display(){
var position = this.body.position
rectMode(CENTER);
rect(position.x,position.y,400,20);   
}   
}