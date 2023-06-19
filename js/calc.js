const del = document.querySelector('button')
const precent = document.querySelector('button:nth-child(2)');
const dot = document.querySelector('button:nth-child(3)');
const empty = document.querySelector('button:nth-child(4)');
const screen = document.querySelector('.screen')
const seven = document.querySelector('button:nth-child(5)');
const eight = document.querySelector('button:nth-child(6)');
const nine = document.querySelector('button:nth-child(7)');
const plus = document.querySelector('button:nth-child(8)');
const four = document.querySelector('button:nth-child(9)');
const five = document.querySelector('button:nth-child(10)');
const six = document.querySelector('button:nth-child(11)');
const minus = document.querySelector('button:nth-child(12)');
const one = document.querySelector('button:nth-child(13)');
const two = document.querySelector('button:nth-child(14)');
const three = document.querySelector('button:nth-child(15)');
const multiply = document.querySelector('button:nth-child(16)');
const clear = document.querySelector('button:nth-child(17)');
const zero = document.querySelector('button:nth-child(18)');
const equal = document.querySelector('button:nth-child(19)');
const divide = document.querySelector('button:nth-child(20)');


console.log(zero)
let result = '';

seven.addEventListener('click', () => {
    screen.textContent = result += '7';
   
})
eight.addEventListener('click', () => {
    screen.textContent = result += '8';
})
nine.addEventListener('click', () => {
    screen.textContent = result +='9';
})
plus.addEventListener('click', () => {
    screen.textContent = result +='+';
})
four.addEventListener('click', () => {
    screen.textContent = result +='4';
})
five.addEventListener('click', () => {
    screen.textContent = result +='5';
})
six.addEventListener('click', () => {
    screen.textContent = result +='6';
})
minus.addEventListener('click', () => {
    screen.textContent = result +='-';
})
one.addEventListener('click', () => {
    screen.textContent = result +='1';
})
two.addEventListener('click', () => {
    screen.textContent = result +='2';
})
three.addEventListener('click', () => {
    screen.textContent = result +='3';
})
multiply.addEventListener('click', () => {
    screen.textContent = result +='x';
})
clear.addEventListener('click', () => {
    screen.textContent = result = '';
})
divide.addEventListener('click', () => {
    screen.textContent = result +='/';
})
zero.addEventListener('click', () => {
    screen.textContent = result +='0';
})
del.addEventListener('click', () => {
    screen.textContent = result = result.slice(0, result.length -1);
})
precent.addEventListener('click', () => {
    screen.textContent = result += '%'
})
dot.addEventListener('click', () => {
    screen.textContent = result += '.'
})


