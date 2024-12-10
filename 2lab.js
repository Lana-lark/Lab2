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
// 1. Максимальное число из массива вещественных чисел
function findMax(arr) {
    if (arr.length === 0)
        return undefined;
    return Math.max.apply(Math, arr);
}
console.log("\nTask 1: Max number:", findMax([1.5, 3.2, -1, 5.8]));
// 2. Флаг наличия хотя бы одного отрицательного числа в матрице целых чисел
function hasNegative(matrix) {
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var num = row_1[_a];
            if (num < 0)
                return true;
        }
    }
    return false;
}
console.log("\nTask 2: Has negative number:", hasNegative([[1, 2], [3, -4]]));
// 3. Сумма чисел в кортеже
function sumTuple(tuple) {
    return tuple.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log("\nTask 3: Sum of tuple:", sumTuple([10, 20, 30]));
// 4. Тип перечисления для типов мячей
var BallType;
(function (BallType) {
    BallType["Soccer"] = "Soccer ball";
    BallType["Basketball"] = "Basketball";
    BallType["Volleyball"] = "Volleyball";
    BallType["Tennis"] = "Tennis ball";
})(BallType || (BallType = {}));
console.log("\nTask 4: ball in enum: ", BallType.Tennis);
// 5. Вывод информации о Cat или Dog с помощью обобщенного типа
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Basik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name, ", Age: ").concat(pet.age, ", Sound: ").concat(pet.speak()));
    if (pet instanceof Dog) {
        console.log("Label: ".concat(pet.label));
    }
}
var myDog = new Dog();
var myCat = new Cat();
console.log("\nTask 5: pets: ");
printPetInfo(myDog);
printPetInfo(myCat);
var mySoccerBall = {
    type: BallType.Soccer,
    size: 5,
    material: "Leather",
    manufacturer: "Adidas"
};
console.log("\nTask 6: ");
console.log(JSON.stringify(mySoccerBall, null, 2));
