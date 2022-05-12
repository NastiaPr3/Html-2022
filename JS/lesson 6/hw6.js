// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let one = 'hello world';
console.log(one.length);
let two = 'lorem ipsum';
console.log(two.length);
let three = 'javascript is cool';
console.log(three.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(one.toUpperCase());
console.log(two.toUpperCase());
console.log(three.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(one.toLowerCase());
console.log(two.toLowerCase());
console.log(three.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str);
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//         let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');
console.log(stringToArray(string));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let mapArray = arr.map(value => value + '');
// Або:
// console.log(arr.map(value => value.toString()));
console.log(mapArray);

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//         let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         array.sort((a, b) => a - b);
//     }else if (direction === 'descending') {
//         array.sort((a, b) => b - a);
//     }
//     return array
// }
// console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//

// let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//  ];
//
// console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration));
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//           value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//         color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},

    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},

    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},

    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},

    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},

    {cardSuit: 'spade', value: 'Jack', color: 'black'},
    {cardSuit: 'diamond', value: 'Jack', color: 'red'},
    {cardSuit: 'heart', value: 'Jack', color: 'red'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},

    {cardSuit: 'spade', value: 'Queen', color: 'black'},
    {cardSuit: 'diamond', value: 'Queen', color: 'red'},
    {cardSuit: 'heart', value: 'Queen', color: 'red'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},

    {cardSuit: 'spade', value: 'King', color: 'black'},
    {cardSuit: 'diamond', value: 'King', color: 'red'},
    {cardSuit: 'heart', value: 'King', color: 'red'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},

    {cardSuit: 'spade', value: 'Ace', color: 'black'},
    {cardSuit: 'diamond', value: 'Ace', color: 'red'},
    {cardSuit: 'heart', value: 'Ace', color: 'red'},
    {cardSuit: 'clubs', value: 'Ace', color: 'black'},

    {cardSuit: null, value: 'Joker', color: 'red'},
    {cardSuit: null, value: 'Joker', color: 'black'}
]

console.log(cards.find(value => value.cardSuit === 'spade' && value.value === 'Ace'));
console.log(cards.filter(value => value.value === '6'));
console.log(cards.filter(value => value.color === 'red'));
console.log(cards.filter(value => value.cardSuit === 'diamond'));
console.log(cards.filter(value => value.cardSuit === 'clubs' && value.value >= '9' || value.value === '10' && value.cardSuit === 'clubs'));
