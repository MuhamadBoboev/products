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

let small = document.querySelector(".small");
alert(small.outerHTML);

let small1 = document.querySelector(".small-1")
let small2 = document.querySelector(".small-2")
let small3 = document.querySelector(".small-3")
let small4 = document.querySelector(".small-4")
let small5 = document.querySelector(".small-5")

small1.addEventListener('mouseover', myFunction)

function myFunction() {
  small.style.height = '50px'
}
