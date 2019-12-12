// Add your Circle class here
// Add your Circle class here
class Circle{
  constructor(raduis){
    this.raduis=raduis
  }
  get diameter(){
    return Math.PI * this.raduis
  }
 
  get circumference(){
    this.circumference= Math.PI * diameter(this.raduis)
  }
  get area(){
    Math.PI * Math.pow(this.raduis,2)
  }
}