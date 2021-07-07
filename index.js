// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius=radius
    }
    get diameter(){

        return this.radius*2

    }

    get circumference(){

       return Math.PI * this.radius*2

    }
    get area(){
       return Math.PI*Math.pow(this.radius,2)
    }

    set diameter(radius2){
        this.radius=radius2/2
    }
    set circumference(radius2){
        this.radius=radius2/(Math.PI*2)
    }
    set area(radius2){
    this.radius=Math.sqrt(radius2/Math.Pi)
    }
}

let circle2= new Circle(2)
console.log(circle2.area)
console.log(circle2.diameter)
console.log(circle2.circumference)

circle2.area=3

console.log(circle2.area)
