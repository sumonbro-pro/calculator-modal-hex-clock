let counterMsg = document.getElementById('counterMsg');

let fNumPlus = document.getElementById('fNumPlus');
let fNum = document.getElementById('fNum');
fNumPlus.addEventListener('click', () => {
    let fNumValue = document.getElementById('fNum').value;
    let fNumber = parseInt(fNumValue);
    fNumber = fNumber + 1;
    fNum.value = fNumber;
})

let fNumMinus = document.getElementById('fNumMinus');
fNumMinus.addEventListener('click', () => {
    let fNumValue = document.getElementById('fNum').value;
    let fNumber = parseInt(fNumValue);
    fNumber = fNumber - 1;
    fNum.value = fNumber;
})

let lNumPlus = document.getElementById('lNumPlus');
let lNum = document.getElementById('lNum');
lNumPlus.addEventListener('click', () => {
    let lNumValue = lNum.value;
    let lNumber = parseInt(lNumValue);
    lNumber++;
    lNum.value = lNumber;
})

let lNumMinus = document.getElementById('lNumMinus');
lNumMinus.addEventListener('click', () => {
    let lNumValue = lNum.value;
    let lNumber = parseInt(lNumValue);
    --lNumber;
    lNum.value = lNumber;
})

fNum.value === undefined ? fNum.value === 0 : fNum.value === fNum.value;
fNum.value === NaN ? fNum.value === 0 : fNum.value === fNum.value;

lNum.value === undefined ? lNum.value === 0 : lNum.value === lNum.value;
lNum.value === NaN ? lNum.value === 0 : lNum.value === lNum.value;

let add = document.getElementById('add');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

add.addEventListener('click', () => {
    let res = parseInt(fNum.value) + parseInt(lNum.value);
    counterMsg.innerHTML = res;
})

minus.addEventListener('click', () => {
    let res = parseInt(fNum.value) - parseInt(lNum.value);
    counterMsg.innerHTML = res;
})

multiply.addEventListener('click', () => {
    let res = parseInt(fNum.value) * parseInt(lNum.value);
    counterMsg.innerHTML = res;
})

divide.addEventListener('click', () => {
    let res = parseInt(fNum.value) / parseInt(lNum.value);
    counterMsg.innerHTML = res;
})

// MODAL STARTS HERE 
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');
const modalContainer = document.getElementById('modalContainer');

hamburger.addEventListener('click', () => {
    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('block');
    hamburger.classList.add('hidden');
})

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('block');
    modalContainer.classList.add('hidden');
    hamburger.classList.remove('hidden');
})

// HEX GENERATOR STARTS 
const hexGenerator = document.getElementById('hexGenerator');
const hexContainer = document.getElementById('hexContainer');
const hexClick = document.getElementById('hexClick');

let hexVariable = '0123456789ABCDEF';
hexClick.addEventListener('click', () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + hexVariable[Math.floor(Math.random() * 16)];
    }
    hexContainer.innerText = color;
    hexGenerator.style.background = color;
})

// CLOCK STARTS 
setInterval(() => {
    const date = new Date();
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const ampm = document.getElementById('ampm');

    let hours = date.getHours();
    console.log(hours)
    if (date.getHours() > 12) {
        hours = hours - 12;
        hour.innerHTML = hours;
        ampm.innerHTML = 'PM'
    }else if (hours <= 0) {
        hours = hours - 12;
        hour.innerHTML = hours;
        ampm.innerHTML = 'AM'
    }

    let minutes = date.getMinutes();
    minute.innerHTML = minutes;

    let seconds = date.getSeconds();
    second.innerHTML = seconds;
}, 1000);
