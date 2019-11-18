// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
       return this.radius*2
    }

    get circumference(){
        return 2*Math.PI*this.radius
    }

    get area(){
        return Math.PI*(this.radius**2)
    }

    set diameter(value){
        this.radius = value/2
    }
    set circumference(value){
        this.radius = value/(2*Math.PI)
    }
    set area(value){
        this.radius = Math.sqrt(value/Math.PI)
    }

}

let circle2 = new Circle(2)
console.log(circle2.area);
console.log(circle2.diameter);
console.log(circle2.circumference);

circle2.area = 3
circle2.diameter = 3
circle2.circumference = 2
console.log(circle2.area);