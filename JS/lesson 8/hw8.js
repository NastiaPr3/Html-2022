// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// const elem = document.getElementById('content');
// console.log(elem);

// -- отримує текст з блоку з id "rules"

// const getEl = document.getElementById('rules');
// console.log(getEl);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
//
// const elem = document.getElementById('content');
// const txt = elem.innerText = 'lksfjaklsdjfajsdkja;sdg;akg;akrni';
// console.log(txt);
// console.log(elem);

// -- замініть текст параграфа з id 'rules' на будь-який інший

// const getEl = document.getElementById('rules');
// const txt = getEl.innerText = 'najgn;ngaerhigipjfnlv';
// console.log(txt);
// console.log(getEl);

// -- змініть кожному елементу колір фону на червоний
//     const elem = document.getElementById('content');
//     elem.style.backgroundColor = 'red';
//
//     const getEl = document.getElementById('rules');
//     getEl.style.backgroundColor = 'red';
//
//     const list = document.getElementsByClassName('fc_rules');
//     for (let item of list) {
//         let color = item.style.backgroundColor = "red"
//     }

// -- змініть кожному елементу колір тексту на синій
// elem.style.backgroundColor = 'blue';
// getEl.style.backgroundColor = 'blue';
// for (let item of list) {
//     let color = item.style.backgroundColor = "blue"
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// const getEl = document.getElementById('rules');
// let list = getEl.classList;
// console.log(list);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// const list = document.getElementsByClassName('fc_rules');
//      for (let item of list) {
//          let color = item.style.color = "red"
//      }
//
//--------------------------------------------------------------------
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// const getEl = document.getElementById('main_header');
// getEl.classList.add('group')
// console.log(getEl.classList);
// b) робить шириниу елементу ul 400px
// const list = document.querySelector('ul');
// list.style.width = '400px';
// list.style.backgroundColor = 'red';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const listIt = document.getElementsByClassName('linkList');
// console.log(listIt);
// for (let item of listIt) {
//     item.style.width = '50%'
//     item.style.backgroundColor = 'aqua';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let fn = (txt) => {
//     const secondList = document.querySelector('.listElement2');
//     secondList.innerText = txt;
// }
//
// fn('hello');

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let list = document.getElementsByTagName('li');
// for (let item of list) {
//     item.style.backgroundColor = 'silver'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let anchorR = document.getElementsByTagName('a');
// for (let item of anchorR) {
//     item.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let anchorR = document.getElementsByTagName('a');
// for (let item of anchorR) {
//     if (item.innerText === 'link3'){
//         item.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let anchorR = document.getElementsByTagName('a');
// for (let item of anchorR) {
//     let XXX = item.innerText;
//     item.classList.add(`element_${XXX}`)
//         console.log(item.classList);
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let getColor = prompt('Enter color');
// const sub = document.getElementsByClassName('sub-header');
//
// let fn = (getColor) => {
//     for (let item of sub) {
//         item.style.backgroundColor = getColor;
//     }
// }
//
// fn(getColor);

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let getColor = prompt('Enter color');
// const sub = document.getElementsByClassName('sub-header');
//
// let fn = (getColor) => {
//     for (let item of sub) {
//         if (item.innerText === 'content 2 segment') {
//         item.style.backgroundColor = getColor;
//         }
//     }
// }
//
// fn(getColor);

// k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний. Текст отримати з prompt()
// let getText = prompt('Enter text');
// const block = document.querySelector('.content_1');
// block.innerText = getText;

// l) отримати елементи p та змінити їм padding на 20px
// const paragraph = document.getElementsByClassName('text_segment');
// for (let item of paragraph) {
//     item.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
 const para = document.querySelector(".text2")
para.innerText = 'mar-2022';


