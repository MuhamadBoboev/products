const pay = document.querySelector('.pay');
window.addEventListener('click', function(event){
  if(event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.content-info__grid');
    // console.log(card)
    const productInfo = {
      id: card.dataset.id,
      // imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.content-info__name-product').innerText,
      reviews: card.querySelector('.content-info__reviews').innerText,
      price: card.querySelector('.content-info__prices').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    }
    // this.console.log(productInfo.counter)
    console.log(productInfo)

    const cartItemHTML = `

     <div class="pay__block" data-id="02">
      <div class="title">${productInfo.title}        </div>
      <div class="reviews">${productInfo.reviews}    </div>
      <div class="prise">${productInfo.price}        </div>
      <div class="counter">${productInfo.counter}     </div>

     </div>`
    pay.insertAdjacentHTML('beforeend', cartItemHTML)
  }

})
const buttonBasketSvg = document.querySelector('.basket-svg');
const buttonBasket = document.querySelector(".button__basket");
buttonBasket.addEventListener('click', function() {
  buttonBasketSvg.classList.toggle('active');
  body.classList.toggle('lock');
  document.querySelector('.header__body').classList.toggle('active');
})
