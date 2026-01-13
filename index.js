import Pet from "./pet.js";

const myDog = new Pet("Bella");

console.log(myDog.getStatus());
console.log("==================");

myDog.tick();
console.log("After some time...");
console.log(myDog.getStatus());
console.log("==================");

myDog.feed();
console.log(myDog.getStatus());

myDog.tick();
myDog.tick();
myDog.tick();
myDog.tick();
myDog.tick();
myDog.tick();
myDog.tick();
myDog.tick();
console.log("After more time...");
console.log(myDog.getStatus());
console.log("==================");

myDog.play();
console.log(myDog.getStatus());
console.log("==================");
