'use strict';

const mainBtn = document.getElementById('main-btn');
const textBox = document.getElementById('textbox');
const question = document.getElementById('question');

let ready = true;

mainBtn.addEventListener('click', read);

document.addEventListener('keydown', check);

function check(e) {
  let key = e.key;
  if (key === 'Enter') {
    read();
  }
}

function read() {
  if (ready === true) {
    ready = false;
    if (textBox.value.trim() !== '') {
      question.textContent = textBox.value;
      textBox.value = '';
      let random = randomInteger(1, 2);
      setTimeout(() => {
        textBox.value = 'Analyzing...';
      }, 500);
      setTimeout(() => {
        if (random !== 1) {
          textBox.value = 'Yes';
          setTimeout(() => {
            question.textContent = '';
            textBox.value = '';
            ready = true;
          }, 2500);
        } else {
          textBox.value = 'No';
          setTimeout(() => {
            question.textContent = '';
            textBox.value = '';
            ready = true;
          }, 2500);
        }
      }, time(randomInteger(4, 10)));
    } else {
      alert('Please Enter Something!');
      ready = true;
    }
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function time(a) {
  return a * 1000;
}
