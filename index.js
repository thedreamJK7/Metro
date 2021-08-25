// ------------------------- header ---------------------------

const previous = document.getElementById('previous');
const next = document.getElementById('next');
const change = document.getElementById('banner-carousel-item');
const item = document.querySelectorAll('.banner-carousel-first');
let count = 0;
next.addEventListener('click', ()=> {
    count++;
    changeList();
});

previous.addEventListener('click', ()=> {
    count--;
    changeList();
});

function changeList() {
    if(count > item.length-1) {
        count = 0;
    } else if(count < 0) {
        count = item.length-1;
    }
    change.style.transform = `translate(${-count*320}px)`;
    console.log(5);
}

// --------------------------------- Toggle for computer --------------------------------------

const navbarImg = document.getElementById('navbar-img');
const navbarIcon = document.getElementById('times');
const navbarSecret = document.getElementById('navbar-secret');
const first = document.getElementById('first');

navbarImg.addEventListener('click', ()=> {
    navbarSecret.classList.add('show');
    first.classList.add('show');
});

navbarIcon.addEventListener('click', ()=> {
    navbarSecret.classList.remove('show');
    first.classList.remove('show');
});

// ---------------------- Toggle for phone ---------------------------------

const navbarI = document.getElementById('navbar-i');
const close = document.getElementById('close');
const navbaInfo = document.querySelector('.navba-info');

navbarI.addEventListener('click', ()=> {
    navbaInfo.classList.add('illustrate');
    console.log(8);
});
close.addEventListener('click', ()=> {
    navbaInfo.classList.remove('illustrate');
});

// ----------------- author tugma

const first1 = document.getElementById('first1');
const second2 = document.getElementById('second2');
const second = document.querySelectorAll('.secondUlLi');
const tugma = document.querySelectorAll('.tugma');
let index = 0;
first1.addEventListener('click', ()=> {
    index = 0;
    resetInterval();
    choose();
});

second2.addEventListener('click', ()=> {
    index = 1;
    resetInterval();
    choose();
});

function choose() {
    let k = index;
    if(k === 0) {
        second[index + 1].classList.remove('showmen');
        tugma[index + 1].classList.remove('showmens');
        k++;    
    } else {
        second[index - 1].classList.remove('showmen');
        tugma[index - 1].classList.remove('showmens');
        k--;
    }
    second[index].classList.add('showmen');
    tugma[index].classList.add('showmens');
    index = k;
};

let interval = setInterval(run, 3000);

function run() {
    choose();
};

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 3000);
    console.log(8);
}

//------------------ scroll

window.addEventListener('scroll',()=> {
    let qwer = document.querySelector('#first');
    qwer.classList.toggle('navshow', window.scrollY > 100);
});

// ------------------------------ owlCarouselStart -----------------------