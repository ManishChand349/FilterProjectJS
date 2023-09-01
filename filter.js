const data = [
  {
    id: 1,
    name: "Relaxed Fit Hoodie",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa8%2Fa7%2Fa8a78bf0866b3ef7e32d1608f5e3d26f3ed5c52b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price: 1499,
    cat: "Hoodie",
  },
  {
    id: 2,
    name: "Straight Regular Jeans",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F83%2F91%2F839161d3d8ea1f78bdb530cb705fff16b7c15092.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_regular%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price: 1799,
    cat: "Jeans",
  },
  {
    id: 3,
    name: "Relaxed Fit Flannel shirt",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6b%2Fec%2F6becf84f5c26f3573a4dfc177db2fc4d0990ddcc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price: 1999,
    cat: "Shirt",
  },
  {
    id: 4,
    name: "Regular Fit Ripstop cargo trousers",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F15%2F1c%2F151c16bb5aafe7e0660a812229382e5f43af9dd8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price: 2999,
    cat: "Trousers",
  },
  {
    id: 5,
    name: "Regular Fit Round-neck T-shirts",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb4%2F2f%2Fb42f8aa4f6b4ba829cca3465b795889d9d0db483.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price: 399,
    cat: "T-shirts",
  },
  {
    id: 6,
    name: "Relaxed Fit Sweatshirt",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fac%2Fe2%2Face22b9fd9ff6b547f773ac2e97194cb4a935493.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price: 799,
    cat: "Sweatshirt",
  },
   {
    id: 7,
    name: "Twill overshirt",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7e%2Fdd%2F7eddd2915739c10b4ec1b19e940dc03075058283.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_shirtjackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price: 2600,
    cat: "Overshirt",
  },
  {
    id: 8,
    name: "Relaxed Fit Appliquéd sweatshirt",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4e%2F59%2F4e59a0b115fd3abb80587f876508fccd91ce6af4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price:  1499,
    cat: "Sweatshirt",
  },
  {
    id: 9,
    name: "Oversized Fit Cotton hoodie",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F29%2F51%2F2951a4a66185cabc3a3b76d2bf1985f508c5b99b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price:  2699,
    cat: "Hoodie",
  },
  {
    id: 10,
    name: "Oversized Fit Cotton hoodie",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa4%2F2d%2Fa42d878e43dd7b4f98fa0e29c666370ae53b3616.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    price:  2699,
    cat: "Hoodie",
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
                         <span class="priceText">₹ ${product.price}</span>
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
  priceValue.textContent = "₹" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "₹" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};
setCategories();
setPrice();
