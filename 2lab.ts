// 1. Максимальное число из массива вещественных чисел
function findMax(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
  }
  console.log("\nTask 1: Max number:", findMax([1.5, 3.2, -1, 5.8]));

// 2. Флаг наличия хотя бы одного отрицательного числа в матрице целых чисел
function hasNegative(matrix: number[][]): boolean {
    for (const row of matrix) {
      for (const num of row) {
        if (num < 0) return true;
      }
    }
    return false;
  }
  console.log("\nTask 2: Has negative number:", hasNegative([[1, 2], [3, -4]]));
  
// 3. Сумма чисел в кортеже
function sumTuple(tuple: [number, number, number]): number {
    return tuple.reduce((sum, num) => sum + num, 0);
}
console.log("\nTask 3: Sum of tuple:", sumTuple([10, 20, 30]));

// 4. Тип перечисления для типов мячей
enum BallType {
    Soccer = "Soccer ball",
    Basketball = "Basketball",
    Volleyball = "Volleyball",
    Tennis = "Tennis ball"
}
console.log("\nTask 4: ball in enum: ", BallType.Tennis);


// 5. Вывод информации о Cat или Dog с помощью обобщенного типа
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Basik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Sound: ${pet.speak()}`);
    if (pet instanceof Dog) {
        console.log(`Label: ${(pet as Dog).label}`);
    }
}

const myDog = new Dog();
const myCat = new Cat();

console.log("\nTask 5: pets: ");
printPetInfo(myDog);
printPetInfo(myCat);

// 6. Тип с перечислением мячей и дополнительных полей
interface Ball {
    type: BallType;
    size: number;
    material: string;
    manufacturer?: string;
}

const mySoccerBall: Ball = {
    type: BallType.Soccer,
    size: 5,
    material: "Leather",
    manufacturer: "Adidas"
};

console.log("\nTask 6: ");
console.log(JSON.stringify(mySoccerBall, null, 2));