// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let a = [1, 2, 3];
//
// let ar = (array) => {
//     let x = 0;
//     for (let item of array) {
//         x += item;
//     }
//     return x / array.length;
// }
//
// console.log(ar(a));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (...array) => {
//     let min = array[0];
//     let max = array[0];
//     for (let item of array) {
//         if (item < min) {
//             min = item;
//         }
//         if (item > max) {
//             max = item;
//         }
//     }
//             console.log(max);
//             return min
// }

// console.log(minMax(1, 2, 3, 10, 7, -2));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let number = [];
// let array = (arr) => {
//     for (let i = 0; i < 20; ++i) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
//
// console.log(array(number));

// let random = () => {
//     let arr = [];
//     for (let i = 0; i < 20; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
// console.log(random());


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let number = [];
// let array = (arr, limit) => {
//     for (let i = 0; i < limit; ++i) {
//         arr[i] = Math.round(Math.random() * 20);
//     }
//     return arr;
// }
//
// console.log(array(number, 50 ));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let newArr = [];
// let arr = [1, 2, 3];
// let fn = (array) => {
//     for (let i = array.length - 1, g = 0; i >= 0; i--, g++) {   ///array.length -1 - це довжина масиву (в даному випадку 3) мінус 1 - це буде 2 - тобто останній індекс - 2
//         newArr[g] = array[i];
//     }
//     return newArr;
// }
// console.log(fn(arr));
//
// let newArr = [];
// let arr = [1, 2, 3];
// let fn = (array) => {
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArr.push(array[i]);
//     }
//     return newArr;
//     }
//
// console.log(fn(arr));

// let newArr = [];
// let arr = [1, 2, 3];
// let fn = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(array[array.length -1 - i]); // [array.length -1 - i] - це індекс масиву array. length -1 (цифра 3), - i - починаючи від 0-го індексу перебирає масив
//     }
//     return newArr;
//     }
//
// console.log(fn(arr));

//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let rectangle = (a, b) => a * b;
// console.log(rectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

//let range = (a) => 3.14 * (a * a); // 3.14 * Math.pow(a, 2)
//console.log(range(20));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let cylinder = (h, r) => 2 * 3.14 * h * r;
// console.log(cylinder(10, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = (arr) => {
//     for (let item of arr) {
//         console.log(item);
//     }
// }
// let arra = [1,2,3,4,5,6,7,8,9,10];
//
// array(arra);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (text) => document.write(`<p>${text}</p>`);
// paragraph('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (text) =>
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// list('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`<ul>`);
// }
//
// list('hello', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = (arr) => {
//     document.write(`<ul>`);
//     for (let element of arr) {
//         document.write(`<li>${element}</li>`)
//     }
//     document.write(`</ul>`)
// }
// let someAr = [1,2, true, false, 'fggeg', 'gqerg'];
//
// array(someAr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let someAr = [
//     {id: 1, name: 'Olya', age: 18},
//     {id: 2, name: 'Vasya', age: 28},
//     {id: 3, name: 'Oleg', age: 38},
// ];
//
// let array = (arr) => {
//     for (let item of arr) {
//         document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`)
//     }
// }
//
// array(someAr);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [6, 9, 22, -2, -9, 0];
//
// let minNum = (array) => {
//     let min = array[0];
//     for (let item of array) {
//         if (item < min){
//             min = item;
//         }
//     }
// return min;
// }
//
// console.log(minNum(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let calc = (array) => {
//     let val = 0;
//     for (let item of array) {
//         val += item;
//     }
//     return val;
// }
// console.log(calc([1, 2, 3]));

//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

// let arr = [
//     {
//         age: 20
//     },
//     {
//         age: 40
//     }
// ];

// let change = (array) => {
//     let empty = array[0];
//     array[0] = array[1];
//     array[1] = empty;
//     return array;
// }
// console.log(change(arr));

// let change = (array) => [array[0], array[1]] = [array[1], array[0]];
// console.log(change(arr));