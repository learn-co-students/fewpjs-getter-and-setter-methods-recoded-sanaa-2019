// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius; 
  }
  get diameter(){
    return 2 *this.radius;
  }
   set diameter(radius){
    this.radius= radius/2;
  }
  
   set circumference(radius){
    this.radius= radius/ Math.PI /2  ;
  }
  
   get circumference(){
    return Math.PI * (2 *this.radius) ;
  }
  
  get area(){
    return  Math.PI * Math.pow(this.radius , 2) 

  }
  set area(radius){
    this.radius= radius;

  }

  
}