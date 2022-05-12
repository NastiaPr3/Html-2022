// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle(a, b) {
//     let result = a * b;
//     return result;
// }
//
// let answer = rectangle(10, 20);
// console.log(answer);

// let rectangle = (a, b) => a * b;
// console.log(rectangle(10, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function range(a) {
//     let p = 3.14;
//     let result = p * (a * a);
//     return result
// }
//
// console.log(range(20));

// let range = (a) => 3.14 * (a * a);
// console.log(range(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(h, r) {
//     let p = 3.14;
//     let result = 2 * p * h * r;
//     return result;
// }
//
// let answer = cylinder(10, 2);
// console.log(answer);

// let cylinder = (h, r) => 2 * 3.14 * h * r;
// console.log(cylinder(10, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayF(arr) {
//     for (let item of arr) {
//         console.log(item);
//     }
// }
// arrayF([1,2,3,4,5,6,7,8,9,10]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function paragraph(text) {
//document.write(`<p>${text}</p>`)
// }
// paragraph('hello world!!!');

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

// function foo(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
//
// foo('hello');


// function list(text) {
//     let listArray = [text, text, text];
//
//     document.write(`<ul>`)
//     for (let i = 0; i < listArray.length; i++) {
//         let item = listArray[i];
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// list('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(arr, number) {
//     let listArray;
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         let item = listArray[i];
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// list('hello', 6);

// function liEl(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// liEl('hello', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//     let listArray = [1, 2, true, 'dsfgfdg', 'wgrweg', false];
// function list() {
//     document.write(`<ul>`)
//     for (let i = 0; i < listArray.length; i++) {
//         let item = listArray[i];
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// list();

// let listArray = [1, 2, true, 'dsfgfdg', 'wgrweg', false];
// function list(arr) {
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list(listArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// function listOfUsers(array) {
//     for (let item of array) {
//         document.write(`<div>${item.name} ${item.age} ${item.status}</div>`);
//     }
// }
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false}
//     ];
//
// listOfUsers(users);


// - створити функцію яка повертає найменьше число з масиву

// let array = [1,2,7,9,-5];
// function minAr(arr) {
//     let min = arr[0];
//     for (const item of arr) {
//         if (item < min){
//             min = item
//         }
//     }
//     return min;
// }
//
// console.log(minAr(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1, 2, 3];
//
// function calc(arr) {
//     let num = 0;
//     for (let item of arr) {
//         num += item;
//     }
//     return num;
// }
//
// console.log(calc(array));