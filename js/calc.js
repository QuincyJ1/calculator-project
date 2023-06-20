const delDOM = document.querySelector('button')
const precentDOM = document.querySelector('button:nth-child(2)');
const dotDOM = document.querySelector('button:nth-child(3)');
const emptyDOM = document.querySelector('button:nth-child(4)');
const screenDOM = document.querySelector('.screen')
const sevenDOM = document.querySelector('button:nth-child(5)');
const eightDOM = document.querySelector('button:nth-child(6)');
const nineDOM = document.querySelector('button:nth-child(7)');
const plusDOM = document.querySelector('button:nth-child(8)');
const fourDOM = document.querySelector('button:nth-child(9)');
const fiveDOM = document.querySelector('button:nth-child(10)');
const sixDOM = document.querySelector('button:nth-child(11)');
const minusDOM = document.querySelector('button:nth-child(12)');
const oneDOM = document.querySelector('button:nth-child(13)');
const twoDOM = document.querySelector('button:nth-child(14)');
const threeDOM = document.querySelector('button:nth-child(15)');
const multiplyDOM = document.querySelector('button:nth-child(16)');
const clearDOM = document.querySelector('button:nth-child(17)');
const zeroDOM = document.querySelector('button:nth-child(18)');
const equalDOM = document.querySelector('button:nth-child(19)');
const divideDOM = document.querySelector('button:nth-child(20)');

let result = ''

sevenDOM.addEventListener('click', () => {
    screenDOM.textContent = result += '7';
   
})
eightDOM.addEventListener('click', () => {
    screenDOM.textContent = result += '8';
})
nineDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='9';
})
plusDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='+';
})
fourDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='4';
})
fiveDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='5';
})
sixDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='6';
})
minusDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='-';
})
oneDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='1';
})
twoDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='2';
})
threeDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='3';
})
multiplyDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='x';
})
clearDOM.addEventListener('click', () => {
    screenDOM.textContent = result = '';
})
divideDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='/';
})
zeroDOM.addEventListener('click', () => {
    screenDOM.textContent = result +='0';
})
delDOM.addEventListener('click', () => {
    screenDOM.textContent = result = result.slice(0, result.length -1);
})
precentDOM.addEventListener('click', () => {
    screenDOM.textContent = result += '%'
})
dotDOM.addEventListener('click', () => {
    screenDOM.textContent = result += '.'
})


