const refs = {
 incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector('#value'),
}

refs.incrementBtn.addEventListener('click', increment)

refs.decrementBtn.addEventListener('click', decrement)

let counterValue = 0;

function increment() {
    counterValue += 1;
     updateCounter();
}

function decrement () {
    counterValue -= 1;
     updateCounter();
}

function updateCounter() {
    refs.counter.textContent = counterValue;
}