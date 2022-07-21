import products from "./product.js";
import { renderCartt } from "./cart.js";
export function renderCart(cart) {
  $(".content_pane").empty();
  $(`
    <div class="list-cart"> 
    </div> 
    <div class="total-wrapper">
      <span>Subtotal:</span>
      <span class="total">0.00$</span>
    </div>
    <div class="view-cart-and-checkout">
      <a href="" onclick="window.location.assign('cart.html')">VIEW CART</a>
      <a href=""  onclick="window.location.assign('cart.html')">CHECKOUT</a>
    </div>
    `).appendTo(".content_pane");
  $(".content_pane .list-cart").empty();
  $(".count-cart").text(cart.length);
  const total = cart.reduce((acc, val) => {
    return acc + val.price * val.quantity;
  }, 0);
  $(".total").text(`${total}.00$`);
  cart.map((val) => {
    $(`
        <div class="product-in-cart">
        <a href=""><img src="./image/${val.img}" alt=""></a>
        <div class="infor-product-in-cart">
          <a href="">${val.name}</a>
          <div class="quantity-price">
            <span class="quantity">${val.quantity}</span>x<span class="price">$${val.price}.00</span>
          </div>
        </div>
        <span class="delete-product" id="delete-product" data-id=${val.id} style="cursor: pointer;">x</span> 
      </div>
        `).appendTo(".content_pane .list-cart");
  });
}

$(document).on("click", "#delete-product", function () {
  var id = $(this).attr("data-id");
  var cart = JSON.parse(localStorage.getItem("cart"));
  const idDelete = cart.findIndex((val) => val.id == id);
  if (idDelete !== -1) {
    cart.splice(idDelete, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem("cart"));
  renderCartt(cart);

  if (cart.length > 0) {
    renderCart(cart);
  } else {
    removeCart(cart);
    $(".content-cart").empty();
    $(".coupon-cartTotals-wrapper").empty();
    $(".cart-empty-wrapper").empty();
    $(`
      <div class="cart-empty-wrapper">
      <div class="cart-empty flex a-center">
        <i class="fas fa-tablet-alt"></i>
        <p>Your cart is currently empty.</p>
      </div>
      <div class="returnShop">
        <a href="" onclick="window.location.assign('index.html')">RETURN TO SHOP</a>
      </div>
      </div>`).appendTo(".content-cart-wrapper");
  }
});

$(document).on("click", ".add_newProducts", function () {
  const id = $(this).parents(".item").data("id");
  var cart = JSON.parse(localStorage.getItem("cart"));
  const idx = cart.findIndex((val) => val.id === id);
  if (idx !== -1) {
    cart[idx].quantity = cart[idx].quantity + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    const item = products.newProduct.find((val) => val.id === id);
    cart.push({ ...item, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length > 0) {
    renderCart(cart);
  } else {
    removeCart(cart);
  }
});
$(document).ready(function () {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length > 0) {
    renderCart(cart);
  }

  if (!localStorage.hasOwnProperty("cart")) {
    cart = localStorage.setItem("cart", "[]");
  }
});

export function removeCart(cart) {
  $(".list-cart").remove();
  $(".total-wrapper").remove();
  $(".view-cart-and-checkout").remove();
  $(`<ul>
    <li>No products in the cart.</li>
  </ul>`).appendTo(".content_pane");
  $(".count-cart").text(cart.length);
}

// export {renderCart, removeCart }

// add product in Deals Of The Weeks
$(document).on("click", ".add", function (e) {
  var id = $(this).attr("data-id");
  var cart = JSON.parse(localStorage.getItem("cart"));
  var idX = cart.findIndex((val) => val.id == id);
  if (idX !== -1) {
    cart[idX].quantity = cart[idX].quantity + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    const item = products.deals.find((val) => val.id == id);
    cart.push({
      ...item,
      quantity: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length > 0) {
    renderCart(cart);
  } else {
    removeCart(cart);
  }
});

// add product in Deals Of The Weeks
