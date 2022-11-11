const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const getItems = (elements) => {
  return elements.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = element;

    console.log(itemEl);
    return itemEl;
  });
};

const items = getItems(ingredients);
const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...items);
