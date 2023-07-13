const data = [
  {
    id: 1,
    name: "Chronograph Analogue  ",
    img: "https://m.media-amazon.com/images/I/61EaZ-1IcmL._AC_UL400_.jpg",
    price: 1200,
    cat: "Premium",
  },
  {
    id: 2,
    name: "Dial Chronograph,Analog ",
    img: "https://m.media-amazon.com/images/I/61J5Ml6tJJL._AC_UL400_.jpg",
    price: 100,
    cat: "Premium",
  },
  {
    id: 3,
    name: "Edifice Chronograph",
    img: "https://m.media-amazon.com/images/I/61o81olOLOL._AC_UL400_.jpg",
    price: 300,
    cat: "Dress",
  },
  {
    id: 4,
    name: "VILEN Edific",
    img: "https://m.media-amazon.com/images/I/71eBNOs+ZAL._AC_UL400_.jpg",
    price: 50,
    cat: "Dress",
  },
  {
    id: 5,
    name: "Analog Blue",
    img: "https://m.media-amazon.com/images/I/61GLIs+hmHL._AC_UL400_.jpg",
    price: 500,
    cat: "Premium",
  },
  {
    id: 6,
    name: "Analog Blue",
    img: "https://m.media-amazon.com/images/I/61GLIs+hmHL._AC_UL400_.jpg",
    price: 600,
    cat: "Premium",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".searchInput");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
          <div class="product">
                         <img src=${product.img} alt="">
                         <span class="name">${product.name}</span>
                         <span class="priceText">$${product.price}</span>
                    </div>

          `
    )
    .join("");
};
displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) => `
     <span class="cat">${cat}</span>
  `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};
const setPrice = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};
setCategories();
setPrice();
