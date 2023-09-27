var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Animal } from "./animal"; // Importuojame pagrindinę "Animal" klasę iš animal.ts
var Zebra = /** @class */ (function (_super) {
    __extends(Zebra, _super);
    function Zebra(name, age) {
        return _super.call(this, name, age) || this;
    }
    Zebra.prototype.makeSound = function () {
        console.log("Zebros garsas");
    };
    return Zebra;
}(Animal));
export { Zebra };
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name, age) {
        return _super.call(this, name, age) || this;
    }
    Tiger.prototype.makeSound = function () {
        console.log("Riaumoja");
    };
    return Tiger;
}(Animal));
export { Tiger };
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant(name, age) {
        return _super.call(this, name, age) || this;
    }
    Elephant.prototype.makeSound = function () {
        console.log("Trimituoja");
    };
    return Elephant;
}(Animal));
export { Elephant };
