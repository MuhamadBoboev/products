const imgArticleGridContainer = document.querySelector('.article__grid');
const imgBig = document.querySelector('[data-article]').src;
document.querySelectorAll('.articleImg').forEach( function (event) {
  event.addEventListener('mouseover', function(){
    const imgSmall = event.querySelector('[data-article]').src;
    const imgSmall1 = event.querySelector('[data-article]').src;
    const imgBig = document.querySelector('[data-article]').src;

    document.querySelector('[data-article]').src = imgSmall;

    this.querySelector('[data-article]').src = imgBig
    console.log()
    })
  })
// document.querySelectorAll('.articleImg').forEach( function(event){
//   event.addEventListener('mousedown', function(){
//     event.classList.toggle('articleImg-hover')
//   })
// })

// let asd ;
// window.addEventListener('DOMContentLoaded', function(){
//   asd
// })
// function salom(){
//   asd= alert('salom');
// }
// setTimeout(salom, 1000)
