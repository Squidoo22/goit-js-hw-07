const ingredientsList = document.querySelector('#ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListItems = ingredients.map((ingredient) => {
    let ingredientsListItem = document.createElement('li')
    ingredientsListItem.textContent = ingredient
    return ingredientsListItem
})

ingredientsList.append(...ingredientsListItems)