
window.addEventListener('click', function(event){

  let counter;

  if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterBasket = event.target.closest('.counter-basket');
    counter = counterBasket.querySelector('[data-counter]');

  }

  if(event.target.dataset.action === 'plus') {
    console.log('plus');


    counter.innerText = ++counter.innerText
  }

  if(event.target.dataset.action === 'minus') {
    // console.log('minus');


    if( parseInt(counter.innerHTML) > 1) {
      console.log('minus')
    counter.innerText = --counter.innerText

    } else if(event.target.closest('.basket-pay__position') && parseInt( counter.innerText) === 1  ) {
      console.log('in cart');
      event.target.closest('.basket-pay__item').remove();

      toggleCartStatus();

    }


  }

})
function toggleCartStatus () {
  // console.log('toggleCartStatus');

  const cartWrapper = document.querySelector('.basket-pay__position');
  const cartEmpty = document.querySelector('[data-cart-empty]');
  const basketPayP = document.querySelector('.basket-pay__title-center__text');
  console.log(basketPayP)
  console.log(cartWrapper.children.length)

  if (cartWrapper.children.length > 0) {
    console.log('FULL');
    cartEmpty.classList.add('display-none');
    basketPayP.classList.add('display-none');
  } else {
    console.log('NEEEEEEEET');
    cartEmpty.classList.remove('display-none');
    basketPayP.classList.remove('display-none')
  }

}
