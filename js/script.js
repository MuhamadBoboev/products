// var x = document.getElementById("contain");

// x.addEventListener("click", myFunction);

// function myFunction() {
//   var element = document.getElementById("nav");
//   element.classList.toggle("open");
//   element.style.display = 'none';
//   x.classList.toggle("change");
// }

// let menu = document.querySelector('.menu')
// let burger = document.querySelector("#burger");
// let contant = document.querySelector("#contant");
// burger.addEventListener('click', myFunction);
// function myFunction() {
//   menu.classList.toggle('contant');
//   if(contant.style.display == 'none'){
//     contant.style.display = 'block'
//   }
//   else{
//     contant.style.display = 'none'
//   }
// }

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.body;
// burger.style.backgroundColor = 'red';
burger.addEventListener('click', myFunction);
function myFunction() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('lock')
}



