import { Animal, DrinkWaterAndEatGrass,DrinkWaterAndEatMeat} from "./animal"; // Importuojame pagrindinę "Animal" klasę iš animal.ts

export class Zebra extends Animal implements DrinkWaterAndEatGrass  {
    maxSpeed: number;
    origin: string;
    constructor(name: string, age: number) {
        super(name, age);
    }
    drinkWater(): void {}
    eatGrass(): void {}
    makeSound() {
        console.log("Zebros garsas");
    }
}

export class Tiger extends Animal implements DrinkWaterAndEatMeat  {
    wasOutside: boolean = false;
    outsideTimestamp: number = 0;
    constructor(name: string, age: number) {
        super(name, age);
    }
    goOutside() {
        this.wasOutside = true;
        this.outsideTimestamp = new Date().getTime();
      }
    
      returnToCage() {
        this.wasOutside = false;
        this.outsideTimestamp = 0; 
      }
    
      checkOutsideStatus(): boolean {
        if (!this.wasOutside) {
          return false; 
        }
    
        const currentTime = new Date().getTime();
        const timeOutside = currentTime - this.outsideTimestamp;
    
        return timeOutside <= 8 * 60 * 60 * 1000;
      }
    eatMeat(): void {}
    drinkWater(): void {}
    makeSound() {
        console.log("Riaumoja");
    }
}

export class Elephant extends Animal implements DrinkWaterAndEatGrass {
    weight: number
    constructor(name: string, age: number) {
        super(name, age);
    }
    drinkWater(): void {} 
    eatGrass(): void {}
    makeSound() {
        console.log("Trimituoja");
    }
}
