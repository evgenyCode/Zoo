var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.makeSound = function () {
        console.log("Gyvūnas išskleidžia garsą");
    };
    return Animal;
}());
export { Animal };
