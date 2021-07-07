// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  
  get diameter(){
    return this.radius*2
  }
  
  set diameter(diameter){
    this.radius=diameter/2;
  }
  get circumference(){
    return Math.PI*this.diameter;
  } 
  set circumference(circumference){
    this.radius=(circumference/Math.PI)/2
  }
  
  get area (){
    return Math.PI*Math.pow(this.radius,2)
  }
    set area(area){
    this.radius=Math.sqrt(Math.PI*area)
  }

}

// let radius=new Circle(20);
// radius.radius;
// radius.radius=10;
// radius.diameter;
// radius.circumference;
// radius.area;
