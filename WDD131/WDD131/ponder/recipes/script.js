const recipes = [
  {
    name: "Apple Crisp",
    image: "Apple_crisp.png",
    category: "Dessert",
    rating: 4,
    description:
      "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
    tags: ["apple", "dessert", "fall", "ice cream"]
  },
  {
    name: "Black Beans and Rice",
    image: "black-beans-and-rice.jpg",
    category: "Dinner",
    rating: 5,
    description:
      "A hearty black beans and rice recipe perfect for weeknight dinners.",
    tags: ["beans", "rice", "healthy", "dinner"]
  },
  {
    name: "Chicken Curry",
    image: "chicken-curry.webp",
    category: "Dinner",
    rating: 5,
    description:
      "Creamy chicken curry with warm spices.",
    tags: ["chicken", "curry", "spicy"]
  },
  {
    name: "Chocolate Chip Cookies",
    image: "chocolate-chip-cookies.jpg",
    category: "Dessert",
    rating: 5,
    description:
      "Soft chocolate chip cookies everyone loves.",
    tags: ["cookies", "dessert", "chocolate"]
  },
  {
    name: "Escalopes de Poulet a la Creme with steamed green beans (chicken with cream)",
    image: "escalopes-de-poulet-a-la-creme.webp",
    category: "Dinner",
    rating: 4,
    description:
      "French chicken with a creamy sauce.",
    tags: ["chicken", "french"]
  },
  {
    name: "German Gooseberry Cake",
    image: "german-gooseberry-cake.jpg",
    category: "Dessert",
    rating: 4,
    description:
      "Traditional German gooseberry cake.",
    tags: ["cake", "dessert", "fruit"]
  },
  {
    name: "Roasted Potatoes",
    image: "roasted-potatoes.webp",
    category: "Side",
    rating: 5,
    description:
      "Crispy roasted potatoes with herbs.",
    tags: ["potatoes", "side"]
  },
  {
    name: "Sweet Potato Waffles",
    image: "sweet-potato-waffle-md.jpg",
    category: "Breakfast",
    rating: 5,
    description:
      "Fluffy waffles made with sweet potatoes.",
    tags: ["breakfast", "waffles"]
  }
];

function createStars(rating) {
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "⭐" : "☆";
  }

  return stars;
}

function recipeTemplate(recipe) {
  return `
    <div class="card">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="content">
            <button>${recipe.category}</button>
            <h2>${recipe.name}</h2>
            <div class="rating">${createStars(recipe.rating)}</div>
            <p class="description">${recipe.description}</p>
        </div>
    </div>
  `;
}

function renderRecipes(recipeList) {
  const container = document.getElementById("recipeContainer");

  container.innerHTML = recipeList
    .map(recipeTemplate)
    .join("");
}

function randomRecipe() {
  const random =
    recipes[Math.floor(Math.random() * recipes.length)];

  renderRecipes([random]);
}

function performSearch() {

  const search = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  let filtered = recipes.filter(recipe => {

    const tags = recipe.tags.join(" ").toLowerCase();

    return (
      recipe.name.toLowerCase().includes(search) ||
      recipe.description.toLowerCase().includes(search) ||
      tags.includes(search)
    );

  });

  filtered.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  renderRecipes(filtered);
}

window.onload = randomRecipe;