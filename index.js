// Add your Circle class here
// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius
  }
  get diameter(){
    return 2* this.radius
  }
 
  get circumference(){
    this.circumference= Math.PI * diameter()
  }
  get area(){
    Math.PI * Math.pow(this.radius,2)
  }
}