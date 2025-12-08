const clickElement = document.getElementById('clicker__counter');
let totalClicks = parseInt(clickElement.textContent);
let cookie = document.getElementsByClassName('clicker__cookie').item(0);

const speedElement = document.createElement('div');
speedElement.innerHTML = 'Скорость клика: <span id="clicker__rate">0</span>'

clickElement.parentNode.appendChild(speedElement);
let lastClick = null;

const rateElement = speedElement.querySelector('#clicker__rate');

cookie.addEventListener('click', () => {
    totalClicks++;
    clickElement.textContent = totalClicks;

    let clickTime = new Date();

    if (lastClick) {
        let difference = (clickTime.getTime() - lastClick.getTime()) / 1000;
        let clickRate = (1 / difference).toFixed(2);

       rateElement.textContent = clickRate;  
    }
    
    lastClick = clickTime;

    if (totalClicks % 2 === 0) {
        cookie.style.width = '200px';
    } else {
        cookie.style.width = '250px';
    }
});