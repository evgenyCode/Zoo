import { Animal } from "./animal"; // Importuojame pagrindinę "Animal" klasę iš animal.ts
export class Zebra extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    makeSound() {
        console.log("Zebros garsas");
    }
}
export class Tiger extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    makeSound() {
        console.log("Riaumoja");
    }
}
export class Elephant extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    makeSound() {
        console.log("Trimituoja");
    }
}
