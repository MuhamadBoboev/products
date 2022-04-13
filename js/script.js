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
let containerSmall = document.querySelector(".content__small-img");
let bigImg = document.querySelector('.content__small-img');
// alert(small.outerHTML);
// small.images.height = '30px'
let img = document.getElementsByTagName ('img');
let small1 = document.querySelector(".small-1")
let small2 = document.querySelector(".small-2")
let small3 = document.querySelector(".small-3")
let small4 = document.querySelector(".small-4")
let small5 = document.querySelector(".small-5")

// small2.addEventListener('click', myFunction);

// containerSmall.querySelectorAll('img')[3].setAttribute(src, "")


// function myFunction() {
  // containerSmall.querySelectorAll('img')[3].height = "20px";
  // bigImg.querySelector('img').height="20px"
  // small.querySelector('img').setAttribute(src, "img/small-4.png")
// }
