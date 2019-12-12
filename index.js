// Add your Circle class here
// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius
  }
  set diameter(col){
    this.col= 2* col
  }
  get diameter(){
    return this.col
  }
 
  get circumference(){
    return Math.PI * diameter()
  }
  get area(){
    Math.PI * Math.pow(this.radius,2)
  }
}