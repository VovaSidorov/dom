let message = prompt("Как вы относитесь к технике apple?");
let messageBlock = document.querySelector('#prompt');
messageBlock.innerHTML = message;

let reklama = document.querySelector('.adv');
reklama.remove();

let zagolovokText = 'Мы продаем только подлинную технику Apple';
let zagolovok = document.querySelector('.title');
zagolovok.innerHTML = zagolovokText;

let menu = document.querySelector(".menu");
console.log(menu);
let elem5 = document.createElement('li');
let elem5text = 'Пятый пункт';
elem5.classList.add('menu-item');
elem5.textContent = elem5text;
console.log(elem5);
menu.appendChild(elem5);

itemsMenu = document.querySelectorAll('.menu-item');
console.log(itemsMenu);
menu.insertBefore(itemsMenu[2],itemsMenu[1]);

document.body.style.background = "url('img/apple_true.jpg') no-repeat right top";
