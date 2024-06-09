// JavaScript

let cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (dets) => {
    cursor.style.top = dets.y + 'px';
    cursor.style.left = dets.x + 'px';
});


const menu = document.getElementById('menu');
const hamburger = document.querySelector('.hamburger');
const crosses = document.getElementById('crosses'); 

hamburger.addEventListener('click', () => {
    toggleMenu();
});

crosses.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    if (menu.style.left === '0%') {
        menu.style.left = '-110%';
        setTimeout(() => {
            menu.style.zIndex = -1;
        }, 500); 
    } else {
        menu.style.zIndex = 1;
        menu.style.left = '0%';
    }
}

const main = document.getElementById('main');
const heading = document.getElementById('heading');
const para = document.getElementById('para');
const counter = document.getElementById('counter');
const loader = document.getElementById('loader');
const content = document.getElementById('content');

const backgrounds = [
    'https://fabric-lab.co/vosio/wp-content/uploads/sites/15/2023/02/image-1-1-1.jpg',
    'https://fabric-lab.co/vosio/wp-content/uploads/sites/15/2023/02/sli2.jpg',
    'https://fabric-lab.co/vosio/wp-content/uploads/sites/15/2023/02/s-3.jpg',
];

const text1 = [
    'IMAGINATIVE IMPACT',
    'ARTISTIC IMPRESSIONS',
    'CREATIVITY IN SPACE',
];

const text2 = [
    'Design without limits, creativity in space.',
    'Creative Expression',
    'Design Dynamic.',
];

let currentIndex = 0;
let counterValue = 0;

function animateContent() {
    content.classList.remove('slide-up');
    void content.offsetWidth; 
    content.classList.add('slide-up');
}

function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    counterValue = (counterValue % 3) + 1;
    counter.textContent = `0${counterValue}`;
    heading.textContent = text1[currentIndex];
    para.textContent = text2[currentIndex];
    main.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    animateContent();
}

function loaderload() {
    loader.style.transition = 'none';
    loader.style.width = '0';
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.transition = 'width 6.9s linear';
        loader.style.width = '100%';
    }, 10);
}

function backChanger() {
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    counterValue = (counterValue <= 1) ? 3 : counterValue - 1;
    counter.textContent = `0${counterValue}`;
    heading.textContent = text1[currentIndex];
    para.textContent = text2[currentIndex];
    main.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    animateContent();
}

setInterval(changeBackground, 7000);
setInterval(loaderload, 7000);
