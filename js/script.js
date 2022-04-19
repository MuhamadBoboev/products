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



imgSmall1.addEventListener('mouseover', myFunction1)
function myFunction1() {
  imgBig.style.backgroundImage= 'url("../img/small-1.png")';
}
imgSmall2.addEventListener('mouseover', myFunction2)
function myFunction2() {
  imgBig.style.backgroundImage= 'url("../img/imgBig2.png")';
}
imgSmall3.addEventListener('mouseover', myFunction3)
function myFunction3() {
  imgBig.style.backgroundImage= 'url("../img/imgBig3.png")';
}
imgSmall4.addEventListener('mouseover', myFunction4)
function myFunction4() {
  imgBig.style.backgroundImage= 'url("../img/imgBig4.png")';
}
imgSmall5.addEventListener('mouseover', myFunction5)
function myFunction5() {
  imgBig.style.backgroundImage= 'url("../img/imgBig5.png")';
}

contentPrice.addEventListener('mouseover', myContentPrice)
contentPrice.addEventListener('mouseout', myContentPrice)
function myContentPrice (){
  contentPriceBlock.classList.toggle('display')
}

document.querySelector(".dropdown__button").addEventListener('click', function(){
  document.querySelector(".dropdown__list").classList.toggle("active")
  this.classList.add("dropdown__button__active");
});

document.querySelectorAll(".dropdown__list-item").forEach( function (listItem) {
  listItem.addEventListener("click", function(){
    document.querySelector(".dropdown__button").innerText = this.innerText;
    document.querySelector(".dropdown__list").classList.remove("active");
    document.querySelector(".dropdown__button").classList.remove('dropdown__button__active')
  })

})


const btnMinus = document.querySelector('[data-action="minus"]')
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]')

// btnMinus.addEventListener('click', function(event){
//   console.log('minus')
//   console.log('Plus');
//   if(parseInt(counter.innerText) > 1) {
//     counter.innerText = --counter.innerText;

//   }
//   if(event.target.closest('.basket-pay__position')) {
//     alert('asd')
//   }
// });
// btnPlus.addEventListener('click', function(){
//   console.log('Plus');
//   counter.innerText = ++counter.innerText
// });
