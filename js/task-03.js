const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=150",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=150",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=150",
    alt: "Group of Horses Running",
  },
];

const markup = images.map(({ url, alt }) => {
  return `<li class="gallery__item"><img class="image" src="${url}" alt="${alt}"/></li>`;
});

document
  .querySelector(".gallery")
  .insertAdjacentHTML("afterbegin", markup.join(""));
