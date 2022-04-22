
window.addEventListener('click', function(event){

  let counter;

  if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterBasket = event.target.closest('.counter-basket');
    counter = counterBasket.querySelector('[data-counter]');

  }

  if(event.target.dataset.action === 'plus') {


    counter.innerText = ++counter.innerText
  }

  if(event.target.dataset.action === 'minus') {


    if( parseInt(counter.innerHTML) > 1) {
    counter.innerText = --counter.innerText

    } else if(event.target.closest('.basket-pay__position') && parseInt( counter.innerText) === 1  ) {
      event.target.closest('.basket-pay__item').remove();

      toggleCartStatus();

      calcCartPrice();
    }


  }

  if (event.target.hasAttribute('data-action') && event.target.closest('.basket-pay__item')) {
    calcCartPrice();
  }

})
function toggleCartStatus () {


  const cartWrapper = document.querySelector('.basket-pay__position');
  const cartEmpty = document.querySelector('[data-cart-empty]');
  const basketPayP = document.querySelector('.basket-pay__title-center__text');

  if (cartWrapper.children.length > 0) {
    cartEmpty.classList.add('display-none');
    basketPayP.classList.add('display-none');
  } else {
    cartEmpty.classList.remove('display-none');
    basketPayP.classList.remove('display-none')
  }

}
function calcCartPrice() {
  const cartItems = document.querySelectorAll('.basket-pay__item');
  const totalPriceEl = document.querySelector('.total-prise');
  const deliveryCost = document.querySelector('.delivery__text');
  const cartDelivery = document.querySelector('.delivery');

  let totalPrice = 0;

  cartItems.forEach(function (item)  {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('[data-price]')

    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  })
  totalPriceEl.innerText = totalPrice;


  if( totalPrice > 0) {
    cartDelivery.classList.add('none');
  } else {
    cartDelivery.classList.remove('none');
  }

  if(totalPrice >= 1600) {

    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';

  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽'
  }

}
