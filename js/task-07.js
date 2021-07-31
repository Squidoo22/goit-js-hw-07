const fontSizeControlInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', event => {
    textOutput.style.fontSize = event.currentTarget.value + 'px'
 })