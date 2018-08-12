class Bike{
    public miles: number;
    constructor(public price: number, public speed: string) {
        this.price = price;
        this.speed = speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`This bike costs ${this.price}, its top speed is ${this.speed}, and its total miles is ${this.miles}`);
        return this;
    }
    ride() {
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("Reversing");
        this.miles -= 5;
        return this;
    }
}

let bike1 = new Bike(200, "30mph");
let bike2 = new Bike(300, "40mph");
let bike3 = new Bike(400, "50mph");
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();