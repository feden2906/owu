// 1) створити функцію яка приймає масив та виводить його
let date = [5489, 484894, 74894, 74894, 4889];

function myFunction() {
    for (let i = 0; i < date.length; i++) {
        console.log(date[i]);

    }
}

// myFunction();

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

let date = [];

function myArray() {
    for (let i = 0; i < 5; i++) {
        date[i] = Math.floor(Math.random() * 36) + 5;;
    }
}

myArray();
myFunction();

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');

function myBalance(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    } else if (firstNumber < secondNumber) {
        console.log(secondNumber);
    }
}

myBalance(firstNumber, secondNumber);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');
let thirdNumber = prompt('Введіть третє число');

function numberMax(firstNumber, secondNumber, thirdNumber) {
    if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
        console.log(firstNumber);
    } else if ((secondNumber > firstNumber) && (secondNumber > thirdNumber)) {
        console.log(secondNumber);
    } else if ((thirdNumber > firstNumber) && (thirdNumber > secondNumber)) {
        console.log(thirdNumber);
    }
}

numberMax(firstNumber, secondNumber, thirdNumber);



// 5) створити функцію яка повертає найбільше число з масиву
const date = [5489, 484894, 74894, 74894, 4889];

function maxArray() {
    console.log(Math.max(...date));
}

maxArray();

// 6) створити функцію яка повертає найменьше число з масиву

const date = [5489, 484894, 74894, 74894, 4889];

function minArray() {
    console.log(Math.min(...date));
}

minArray();

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
const date = [10, 11, 15, 25, 30, 58];
let sum = 0;

function sumArray() {
    for (let i = 0; i < date.length; i++) {
        sum += date[i];
    }
    console.log(sum);
}

sumArray();

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const date = [10, 11, 15, 25, 30, 58];
let sum = 0;
let average = 0;

function averageArray() {
    for (let i = 0; i < date.length; i++) {
        sum += date[i];
        average = sum / date.length;
    }

    console.log(average);
}

averageArray();


// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

let bd = [{
        name: 'Maks',
        age: 28,
        car: true
    },
    {
        model: 'Camry'

    }
];

let arrKeys = [];

function keyArray() {
    for (const key of bd) {
        arrKeys.push(Object.keys(key));
    }
    console.log(arrKeys)
}

keyArray();

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

let bd = [{
        name: 'Maks',
        age: 28,
        car: true
    },
    {
        model: 'Camry'
    }
];


function keyArray() {
    for (const key of bd) {
        console.log(Object.values(key))
    }
}

keyArray();

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

let arr = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];
let sumArr = [];

function sumArrs() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i == j) {
                arr[i] = arr[i] + arr2[j];
                sumArr.push(arr[i])
            }
        }
    }
    console.log(sumArr);
}


sumArrs();