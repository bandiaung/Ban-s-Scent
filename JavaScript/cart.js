let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

const cardList = document.querySelector(".card-list");
const totalPrice = document.querySelector(".total-price");

// Display products
cardList.innerHTML = cart
  .map(
    (product) => `

  <div class="card">

    <div class="card-image">
      <img src="${product.image}" />
    </div>

    <div class="card-about">

      <h2>${product.name}</h2>

      <p>${product.type}</p>

      <p>Price: $${product.price}</p>

      <p class="quantity">Quantity: ${product.quantity}</p>

      <button class="delivery-btn">
        Delivery
      </button>

      <button 
        class="remove-from-cart-btn"
        data-id="${product.id}">
        Remove
      </button>

    </div>

  </div>

`,
  )
  .join("");

// Calculate total
function calculate() {
  let totalprice = 0;
  let totalItem = 0;

  cart.forEach((product) => {
    totalprice += product.price * product.quantity;

    totalItem += product.quantity;
  });

  totalPrice.innerHTML = `

    <h1>Total Cost</h1>

    <div class="item-name">

      <ol class="item-list">

        ${cart
          .map(
            (product) => `

          <li>

            <h3>${product.name}</h3>

            <p>$${product.price}</p>

            <p>(${product.quantity})</p>

          </li>

        `,
          )
          .join("")}

      </ol>

    </div>

    <hr />

    <div class="total">

      TOTAL : $${totalprice}

      (${totalItem} items)

      <button class="pay">
        Payment
      </button>

    </div>

  `;
}

calculate();

const removeButtons = document.querySelectorAll(".remove-from-cart-btn");

removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;

    console.log("Clicked ID:", id);
    console.log("Cart:", cart);

    const product = cart.find((product) => product.id === id);

    console.log("Found product:", product);

    if (!product) {
      console.log("Product not found!");
      return;
    }

    product.quantity--;

    button.closest(".card").querySelector(".quantity").textContent =
      `Quantity: ${product.quantity}`;

    if (product.quantity <= 0) {
      cart = cart.filter((product) => product.id !== id);

      const card = button.closest(".card");

      card.remove();
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    calculate();
  });
});
