var myString: string;
myString = "Bee stinger";
// Must change the 9 to "9" because myString was assigned the type String
myString = "9";

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
// Must change 9 to "9" because it is not assignable to parameter of type String
 console.log(sayHello("9"));

 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
// Must add another argument because the function fullName expects 3 parameters
 console.log(fullName("Jimbo", "Jones", "Blah"));


interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
firstName: "Christine",
lastName: "Yang",
belts: 2
}
const jay = {
firstName: "Jay",
lastName: "Patel",
belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// Property belt in jay must be changed to "belts"
console.log(graduate(jay));


class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }

//  must add new to create new instance and firstname/lastname as parameters to the constructor
 const shane = new Ninja("Shane", "Bab");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja("Alan", "Turing");
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));


var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x*x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}

class Elephant{
    constructor(public age: number){}
    birthday = () => {
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.