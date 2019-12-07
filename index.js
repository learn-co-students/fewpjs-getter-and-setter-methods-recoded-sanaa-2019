// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    set diameter (radius){
        this.radius = radius/2;
    }
    get diameter (){
        return 2 * this.radius; 
    }
    set circumference(cir){

        this.radius = cir / (Math.PI * 2)
        
    }
    get circumference(){
        return Math.PI * this.diameter;
    }
    set area (radius ){ 
        this.radius = radius;
    }
    get area (){
        return this.radius**2 * Math.PI;
    }
}