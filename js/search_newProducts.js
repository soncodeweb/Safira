import products from "./product.js";
import { renderCart, removeCart } from "./cart_pane.js";

// const products_deals = product1.filter((val) => {
//     return val.price <= 70;
//   });
$(document).ready(function () {
  $("#search-newProducts").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
  });
  $(".sub-image").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
  });
});

$(".quickview").click(function (e) {
  e.preventDefault();
  $(".search-newProducts-wrapper").fadeIn();
  // $(".search-newProducts").slideUp(2000);
});

$(".quickview-deals").click(function (e) {
  e.preventDefault();
  $(".search-newProducts-wrapper").fadeIn();
  // $(".search-newProducts").slideUp(2000);
});

$(".exit").click(function (e) {
  e.preventDefault();
  $(".search-newProducts-wrapper").fadeOut();
});
function renderSubImage(newProducts) {
  $("sub-image").empty();
  newProducts.filter((val, index) => {
    if (index < 4) {
      $(`
             <img src="./image/${val.img}" alt="" >
             `).appendTo(".sub-image");
    }
  });
}
function renderQuickView(product) {
  $("#search-newProducts").empty();
  $(`
  <div class="item" data-id=${product.id}>
  <div class="product-images">
    <div class="main-image">
      <img src="./image/${product.img}" alt="">
    </div>
    <div class="sub-image owl-carousel owl-theme">
    </div>
  </div>
  <div class="product-information">
    <div class="name">${product.name}</div>
    <div class="price">$${product.price}.00</div>
    <a class="see-All-Features" href="">See all features</a>
    <div class="addToCart-wrapper">
        <input type="number" value="1" step="1" min="1" class="quantity-quickview">
        <a href="" class="add-quickview">ADD TO CARD</a>
    </div>
    <div class="quick-desc">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
    </div>
    <div class="share">
      <h3>SHARE</h3>
      <ul class="social-icons">
        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>  
        <li><a href=""><i class="fab fa-twitter"></i></a></li>  
        <li><a href=""><i class="fab fa-pinterest"></i></a></li>  
        <li><a href=""><i class="fab fa-google-plus-g"></i></a></li>  
        <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>  
      </ul>
    </div>
  </div>
</div>
  `).appendTo("#search-newProducts");
  // renderQuickView(products.newProduct);
  renderSubImage(products.newProduct);
}

// renderQuickView(products.newProduct);

$(document).on("click", ".quickview", function () {
  const id = $(this).parents(".item").data("id");
  // console.log(id);
  const product = products.newProduct.find((val) => val.id === id);
  renderQuickView(product);
  // renderSubImage(products.newProduct);
});

$(document).on("click", ".add-quickview", function () {
  const id = $(this).parents(".item").data("id");
  var cart = JSON.parse(localStorage.getItem("cart"));
  const idx = cart.findIndex((val) => val.id === id);
  if (idx !== -1) {
    const quantity = document.querySelector(".quantity-quickview").value;
    console.log(quantity);
    cart[idx].quantity = cart[idx].quantity + Number(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    const quantity = document.querySelector(".quantity-quickview").value;
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
