const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const headingText = category.children[0].textContent;
  const numberCategories = category.children[1].children.length;

  console.log(`Category: ${headingText}`);
  console.log(`Elements: ${numberCategories}`);
});
