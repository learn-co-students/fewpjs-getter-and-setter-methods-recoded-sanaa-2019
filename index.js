// Add your Circle class here
// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius; 
  }
  get diameter(){
    return 2 *this.radius*2;
  }
   set diameter(radius){
    this.radius= radius/2;
  }
  
   get circumference(){
    return 2 * Math.PI * this.area ;
  }
   set circumference(radius){
    this.radius= radius/2;
  }
  
   get circumference(){
    return 2* Math.PI *  this.area ;
  }
   set circumference(radius){
    this.radius = circle / Math.PI / 2
  }
  
  get area(){
    return  Math.PI * Math.pow(this.radius , 2) 

  }

  
}
