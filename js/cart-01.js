const pay = document.querySelector('.basket-pay__position');
const basket = document.querySelector('.basket-pay');


window.addEventListener('click', function(event){
  if(event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.content-info__grid');
    const productInfo = {
      id: card.dataset.id,
      // imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.content-info__name-product').innerText,
      reviews: card.querySelector('.content-info__reviews').innerText,
      price: card.querySelector('.content-info__prices span:first-child').innerText,
      counter: card.querySelector('[data-counter]').innerText,
      // size: card.querySelector('.dropdown__button').innerText, data-size="10"
      size: card.querySelector('[data-size]').innerText
    };
    const itemInCart = pay.querySelector(`[data-id="${productInfo.id}"]`);

    if(itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);

    } else {

    const cartItemHTML = `
    <div class="basket-pay__item" data-id="${productInfo.id}" >
      <div class="basket-pay__block">
       <div class="title">${productInfo.title}        </div>
       <div class="reviews">${productInfo.reviews}    </div>
       <div class="size">${productInfo.size}</div>

       <div class="basket-pay__grid" >
         <button class="basket-pay__item__control" data-action="minus" >-</button>
         <div class="basket-pay__item__control" data-counter>${productInfo.counter}</div>
         <button class="basket-pay__item__control" data-action="plus">+</button>
       </div>

       <div class="prise"><p><span>${productInfo.price}</span><span>₽</span></p>        </div>
      </div>
    </div>
    `;

    pay.insertAdjacentHTML('beforeend', cartItemHTML)


    }



    card.querySelector('[data-counter]').innerText = '1';

    toggleCartStatus();

    calcCartPrice();
  }

})




const buttonBasket = document.querySelector('.button__basket');

buttonBasket.addEventListener('click', function() {
  document.querySelector('.content').classList.toggle('active');
  document.querySelector('.basket-pay').classList.toggle('active')
})
// alert(document.querySelector('.dropdown__button'))
