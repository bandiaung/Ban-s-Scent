 const products = [
  {
    name: "Versace EDP",
    price: 60,
    image: "image/item-9.png",
    type: "sweet, fresh, icy",
    id: "item-1",
  },
   {
    name: "Nautica Voyage",
    image: "image/item-12.png",
    type: "fresh, clean, sweet",
    id: "item-2",
    price: 32,
  },
  {
    name: "Hawas Tropical",
    image: "image/item-14.png",
    type: "fresh, clean, sweet",
    id: "item-14",
    price: 34,
  },
  {
    name: "Velentino Lava",
    image: "image/item-15.png",
    type: "woody, spicy, sweet",
    id: "item-15",
    price: "120"
  },
  {
    name: "Hawas for HIM",
    image: "image/item-16.png",
    type: "fresh, clean, sweet",
    id: "item-16",
    price:"30"
  },
  {
    name: "TOM FORD leather",
    image: "image/item-17.png",
    type: "woody, spicy, leather",
    id: "item-17",
    price:"49"
  },
  {
    name: "YSL Libre",
    image: "image/item-18.png",
    type: "fresh, clean, sweet",
    id: "item-18",
    price:"299"
  },
  {
    name: "Veletino Pink",
    image: "image/item-19.png",
    type: "fresh, clean, sweet",
    id: "item-19",
    price:"149"
  },
  {
    name: "REPLICA Sailing Day",
    image: "image/item-20.png",
    type: "fresh, clean, sour",
    id: "item-20",
    price:"100"
  },
  {
    name: "BURBERRY HER",
    image: "image/item-21.png",
    type: "candy sweet, clean",
    id: "item-21",
    price:"120"
  },
  {
    name: "THE MATCHA 26",
    image: "image/item-22.png",
    type: "woody, masculine, leather",
    id: "item-22",
    price:"200"
  },
  {
    name: "By The Fire Place",
    image: "image/item-23.png",
    type: "spicy, woody, sweet",
    id: "item-23",
    price:"178"
  },
  {
    name: "Stronger With YOU",
    image: "image/item-5.png",
    type: "masculine, warm, sweet",
    id: "item-5",
    price:"39"
  },
  {
    name: "Good Girl EDP",
    image: "image/item-25.png",
    type: "candy, clean, sweet",
    id: "item-25",
    price:"45"
  },
  {
    name: "Veletino Powdery",
    image: "image/item-26.png",
    type: "fresh, clean, powdery",
    id: "item-26",
    price:"200"
  },
  {
    name: "Versace Honey EDP",
    image: "image/item-11.png",
    type: "fresh, clean, sweet",
    id: "item-11",
    price:"36"
  },
  {
    name: "Le Male Exilir",
    image: "image/item-4.png",
    type: "honey, warm, sweet",
    id: "item-4",
    price:"120"
  },
  {
    name: "DOLCE & GABBANA",
    image: "image/item-40.png",
    type: "fresh, clean, sweet",
    id: "item-40",
    price:"29"
  },
  {
    name: "Velanaine",
    image: "image/item-30.png",
    type: "fresh, clean, sweet",
    id: "item-30",
    Price:"300"
  },
  {
    name: "Exception",
    image: "image/item-31.png",
    type: "fresh, clean, sweet",
    id: "item-31",
    Price:"210"
  },
  {
    name: "NUIT DE FEU",
    image: "image/item-32.png",
    type: "leather, masculine, dark",
    id: "item-32",
    price:"299"
  },
  {
    name: "Jean Paul",
    image: "image/item-3.png",
    type: "fresh, clean, sweet",
    id: "item-3",
    price:"349"
  },
  {
    name: "Hawas for HIM",
    image: "image/item-34.png",
    type: "fresh, clean, sweet",
    id: "item-34",
    price:"199"
  },
  {
    name: "Hawas Tropical",
    image: "image/item-35.png",
    type: "fresh, clean, sweet",
    id: "item-35",
    price:"229"
  },
  {
    name: "Allure Homme Sport",
    image: "image/item-36.png",
    type: "fresh, clean, sweet",
    id: "item-36",
    price:"199"
  },
  {
    name: "Chanel Chanel",
    image: "image/item-37.png",
    type: "fresh, warm, sweet",
    id: "item-37",
    price:"299"
  },
  {
    name: "Riffs Freeze",
    image: "image/item-38.png",
    type: "fresh, clean, sweet",
    id: "item-38",
    price:"249"
  },
  {
    name: "Aqua Di Gio",
    image: "image/item-6.png",
    type: "fresh, clean, sweet",
    id: "item-6",
    price:"279"
  },
];

const itemContainer = document.querySelector(".availible-item-container-wrapper");
const priceSpan = document.getElementById('span');

products.forEach((product) => {
  itemContainer.innerHTML += `
   <div class="availible-item">
      <div class="availible-item-image">
        <img src="${product.image}" />
      </div>
      <div class="availible-item-about">
        <h2>${product.name}</h2>
        <p>${product.type}</p>
        <button class="add-to-cart" data-product-id="${product.id}" data-price="${product.price}">Add To Card</button>
      </div>
   </div>
  `;
});




const addToCart = document.querySelectorAll(".add-to-cart");
const shopIcon = document.querySelector(".shop-icon");

// Get existing cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateShopIcon() {
  let totalPrice = 0;
  let itemCount = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    itemCount += item.quantity;
  });

  let priceSpan = shopIcon.querySelector(".price-span");

  if (!priceSpan) {
    priceSpan = document.createElement("span");
    priceSpan.classList.add("price-span");
    shopIcon.appendChild(priceSpan);
  }

  let countSpan = shopIcon.querySelector(".item-count");

  if (!countSpan) {
    countSpan = document.createElement("span");
    countSpan.classList.add("item-count");
    shopIcon.appendChild(countSpan);
  }

  // Reset when cart is empty
  if (cart.length === 0) {
    priceSpan.style.display = "none";
    countSpan.style.display = "none";
    shopIcon.classList.remove("active");
    return;
  }
  priceSpan.style.display = "inline";
  countSpan.style.display = "inline";


  priceSpan.textContent = `$${totalPrice}`;
  countSpan.textContent = itemCount;

  if (itemCount > 0) {
    shopIcon.classList.add("active");
  } else {
    shopIcon.classList.remove("active");
  }
}

addToCart.forEach((button) => {
  button.addEventListener("click", () => {

    const productId = button.dataset.productId;

    const product = products.find(
      (p) => p.id === productId
    );

    const existingProduct = cart.find(
      (item) => item.id === productId
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    updateShopIcon();
  });
});


window.addEventListener("storage", () => {

  cart = JSON.parse(localStorage.getItem("cart")) || [];

  updateShopIcon();

});