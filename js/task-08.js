const refs = {
  amountInput: document.querySelector('input[type="number"]'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

const colors = ['red', 'blue', 'green', 'yellow', 'cyan', 'orange'];

function createBoxes(amount) {
    const boxes = []

    for (let i = 0; i < amount; i += 1) {
        let div = document.createElement('div');
        let color = Math.floor(Math.random() * 16777215).toString(16);
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;;
        div.style.backgroundColor = `#${color}`;
        boxes.push(div)
    }

    refs.boxesContainer.append(...boxes)
}

function destroyBoxes() {
    refs.boxesContainer.innerHTML = '';
}

refs.renderBtn.addEventListener('click', () => {
    createBoxes(refs.amountInput.value)
});

refs.destroyBtn.addEventListener('click', destroyBoxes)