//Ловим элемент html
const buttonEl = document.querySelector('.button');
const textEl = document.querySelector('.text');
const listEl = document.querySelector('.list');
const imgEl = document.querySelector('.imagine');

let divEl = document.querySelector('.division');
divEl.style.display = 'none';

//Добавляем функционал по отображению контента по клику
buttonEl.addEventListener('click', function (e) {
    if (divEl.style.display === 'none') {
        divEl.style.display = 'block'
    } else {
        divEl.style.display = 'none'
    }
})