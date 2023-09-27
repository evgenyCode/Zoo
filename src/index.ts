import { Elephant, Tiger, Zebra } from "./animals";

const zebra = new Zebra("Marty", 5);
const tiger = new Tiger("Willson", 7);
const elephant = new Elephant("Django", 35);


console.log(zebra.name); 
console.log(tiger.name); 
console.log(elephant.name); 


tiger.goOutside();
console.log("Is tiger was outside last 8 h", tiger.checkOutsideStatus()); 




zebra.eatGrass();
tiger.eatMeat();
elephant.drinkWater();