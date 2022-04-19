
window.addEventListener('click', function(event){

  if(event.target.dataset.action === 'plus') {
    console.log('plus');

    const counterBasket = event.target.closest('.counter-basket');
    const counter = counterBasket.querySelector('[data-counter]');

    counter.innerText = ++counter.innerText
  }

  if(event.target.dataset.action === 'minus') {
    console.log('minus');

    const counterBasket = event.target.closest('.counter-basket');
    const counter = counterBasket.querySelector('[data-counter]');
    if( parseInt(counter.innerHTML) > 1) {
    counter.innerText = --counter.innerText
    }
  }
})
