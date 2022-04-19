// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//

// let a = -3;
// if (a !== 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('enter the minute');
// if (time > 0 && time <= 15) {
//     console.log('first');
// } else if (time > 15 && time <= 30) {
//     console.log('second');
// } else if (time > 30 && time <= 45) {
//     console.log('third');
// } else if (time > 45 && time <= 59) {
//     console.log('fourth');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
//
// let day = prompt('enter the day');
// if (day > 0 && day <= 10) {
//     console.log('first');
// } else if (day > 10 && day <= 20) {
//     console.log('second');
// } else if (day > 20 && day <= 31) {
//     console.log('third');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

// let day = prompt('enter the day');
// switch (day) {
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number1 = prompt('first number');
// let number2 = prompt('second number');
// if (number1 > number2) {
//     console.log(number1);
// } else if (number1 === number2) {
//     console.log("Numbers are equal");
// }
// else {
//     console.log(number2);
// }

// Або:

// let number1 = prompt('first number');
// let number2 = prompt('second number');
// let xxx = number1 > number2 || number1 === number2 ? number1 : number2;
// console.log(xxx);


