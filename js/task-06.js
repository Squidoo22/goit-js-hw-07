const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', validateInput)

function validateInput(event) {
    const target = event.currentTarget;
    const requiredLength = Number(target.dataset.length);

    if (validationInput.value.length === requiredLength) {
        validationInput.classList.add('valid')
        validationInput.classList.remove('invalid')
    } else {
        validationInput.classList.add('invalid')
        validationInput.classList.remove('valid')

    }
}