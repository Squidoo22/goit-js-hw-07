const categoriesRefs = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesRefs.length} категории.`)

console.dir(categoriesRefs)
categoriesRefs.forEach((category) => {
    console.group();
    console.log(`Категория: ${category.firstElementChild.textContent}`)
    console.log(
    `Количество элементов: ${category.querySelectorAll('li').length}`,
  );
    console.groupEnd();
})