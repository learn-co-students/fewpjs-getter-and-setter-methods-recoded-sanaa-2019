// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
        return 2*this.radius;
    }
    get circumference(){
        return 2*Math.PI*this.radius;
    }
    get area(){
        return Math.PI*(this.radius**2)
    }
    set diameter(dia){
        this.radius=dia/2
    }
    set circumference(cir){
        this.radius=cir/(2*Math.PI)
    }
    set area(area){
        this.radius=Math.sqrt(area/Math.PI)
    }
}
let crcl=new Circle(4);
console.log(crcl)
console.log(crcl.diameter)
console.log(crcl.circumference)
console.log(crcl.area)
/* crcl.diameter=8
crcl.circumference=25.132741228718345 */
crcl.area=50.26548245743669
console.log(crcl)
console.log(crcl.diameter)
console.log(crcl.circumference)
console.log(crcl.area)