const url = "http://localhost:3000/recipies";
const ul = document.querySelector("ul");
const template = document.querySelector("template");

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((recipies) => {
    updateUl(recipies);
  })
  .catch();

function updateUl(recipies) {
  recipies.forEach((recipie) => {
    const clone = template.content.cloneNode(true);
    const image = clone.querySelector("img");
    const h1tital = clone.querySelector(".h1-tital");
    const h3cookingTime = clone.querySelector("h3");
    const h3ingredients = clone.querySelector("h2");
    const pmethod = clone.querySelector(".p-method");

    h1tital.textContent = recipie.title;
    h3cookingTime.textContent = recipie.cookingTime;
    h3ingredients.textContent = recipie.ingredients;
    pmethod.textContent = recipie.method;

    image.src = recipie.imageUrl;
    console.log(image);
    image.width = 300;

    ul.appendChild(clone);
  });
}
