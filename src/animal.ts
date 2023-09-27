export class Animal {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log("Gyvūnas išskleidžia garsą");
}


}

export interface DrinkWaterAndEatGrass extends Animal {
    drinkWater(): void;
    eatGrass(): void;
    
  }

  export interface DrinkWaterAndEatMeat extends Animal {
    drinkWater(): void;
    eatMeat(): void;
  }
