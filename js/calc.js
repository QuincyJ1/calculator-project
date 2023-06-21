// dėstytojo kodas: 

const screenDOM = document.querySelector('.screen')
const buttonsDOM = document.querySelectorAll('.key')


for (const buttonDOM of buttonsDOM) {
    buttonDOM.addEventListener('click', () => {
        const buttonValue = buttonDOM.innerText;
        const currentEquationValue = screenDOM.innerText;
        let updatedEquationValue = currentEquationValue;


        if (buttonValue === 'C') {
            updatedEquationValue = ''
        } else if (buttonValue === 'DEL') {
            updatedEquationValue = currentEquationValue.slice(0, -1);
        } else {
            updatedEquationValue += buttonValue;
        }
        screenDOM.innerText = updatedEquationValue;
    })
}




// Mano kodas: 
// const keyboardDOM = document.querySelector('.container')
// const delDOM = keyboardDOM.querySelector('button')
// const precentDOM = keyboardDOM.querySelector('button:nth-child(2)');
// const dotDOM = keyboardDOM.querySelector('button:nth-child(3)');
// const emptyDOM = keyboardDOM.querySelector('button:nth-child(4)');
// const screenDOM = keyboardDOM.querySelector('.screen')
// const sevenDOM = keyboardDOM.querySelector('button:nth-child(5)');
// const eightDOM = keyboardDOM.querySelector('button:nth-child(6)');
// const nineDOM = keyboardDOM.querySelector('button:nth-child(7)');
// const plusDOM = keyboardDOM.querySelector('button:nth-child(8)');
// const fourDOM = keyboardDOM.querySelector('button:nth-child(9)');
// const fiveDOM = keyboardDOM.querySelector('button:nth-child(10)');
// const sixDOM = keyboardDOM.querySelector('button:nth-child(11)');
// const minusDOM = keyboardDOM.querySelector('button:nth-child(12)');
// const oneDOM = keyboardDOM.querySelector('button:nth-child(13)');
// const twoDOM = keyboardDOM.querySelector('button:nth-child(14)');
// const threeDOM = keyboardDOM.querySelector('button:nth-child(15)');
// const multiplyDOM = keyboardDOM.querySelector('button:nth-child(16)');
// const clearDOM = keyboardDOM.querySelector('button:nth-child(17)');
// const zeroDOM = keyboardDOM.querySelector('button:nth-child(18)');
// const equalDOM = keyboardDOM.querySelector('button:nth-child(19)');
// const divideDOM = keyboardDOM.querySelector('button:nth-child(20)');

// let result = ''

// sevenDOM.addEventListener('click', () => {
//     screenDOM.textContent = result += '7';
   
// })
// eightDOM.addEventListener('click', () => {
//     screenDOM.textContent = result += '8';
// })
// nineDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='9';
// })
// plusDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='+';
// })
// fourDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='4';
// })
// fiveDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='5';
// })
// sixDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='6';
// })
// minusDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='-';
// })
// oneDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='1';
// })
// twoDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='2';
// })
// threeDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='3';
// })
// multiplyDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='x';
// })
// clearDOM.addEventListener('click', () => {
//     screenDOM.textContent = result = '';
// })
// divideDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='/';
// })
// zeroDOM.addEventListener('click', () => {
//     screenDOM.textContent = result +='0';
// })
// delDOM.addEventListener('click', () => {
//     screenDOM.textContent = result = result.slice(0, -1);
// })
// precentDOM.addEventListener('click', () => {
//     screenDOM.textContent = result += '%'
// })
// dotDOM.addEventListener('click', () => {
//     screenDOM.textContent = result += '.'
// })


