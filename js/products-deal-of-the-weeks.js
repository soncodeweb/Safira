import products from "./product.js";
import { renderCart, removeCart } from "./cart_pane.js";

$(document).ready(function () {
  $(".owl-carousel.products-deals").owlCarousel({
    item: 3,
    nav: true,
    margin: 20,
  });
});

if (!localStorage.hasOwnProperty("cart")) {
  cart = localStorage.setItem("cart", "[]");
} else {
  var cart = JSON.parse(localStorage.getItem("cart"));
}

function RenderProducts_Deals(products_deals) {
  products_deals.map((val) => {
    $(`
        <div class="item1"  data-id=${val.id}> 
        <ul>
          <li>
            <a href=""
              ><img
                src="./image/${val.img}"
                alt=""
              />
            </a>
            <div class="products-button">
              <ul class="flex j-between a-center">
                <li>
                  <a href="" class="add" data-id=${val.id}><i class="fas fa-shopping-cart"></i></a>
                </li>
                <li>
                  <a href=""><i class="far fa-heart"></i></a>
                </li>
                <li>
                  <a href=""><i class="fas fa-undo"></i></a>
                </li>
                <li class="quickview-deals">
                  <a href=""><i class="fas fa-search"></i></a>
                </li>
              </ul>
            </div>
            <div class="sale">
              <span>Sale!</span>
            </div>
            <div class="countdown">
            <div class="time days">
              <span class="time-days"></span>
              <span class="label">DAYS</span>
            </div>
            <div class="time hours">
              <span class="time-hours"></span>
              <span class="label">HOURS</span>
            </div>
            <div class="time mins">
              <span class="time-mins"></span>
              <span class="label">MINS</span>
            </div>
            <div class="time secs ">
              <span class="time-secs"></span>
              <span class="label">SECS</span>
            </div>
          </div>
          </li>
          <li><a href="">${val.name}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        </div>
        `).appendTo(".owl-carousel.products-deals");
  });
}

RenderProducts_Deals(products.deals);

// $(document).on("click", ".add", function (e) {
//   var id = $(this).attr("data-id");
//   var idX = cart.findIndex((val) => val.id == id);
//   if (idX !== -1) {
//     cart[idX].quantity = cart[idX].quantity + 1;
//     localStorage.setItem("cart", JSON.stringify(cart));
//   } else {
//     const item = products.deals.find((val) => val.id == id);
//     cart.push({
//       ...item,
//       quantity: 1,
//     });
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }
//   if (cart.length > 0) {
//     renderCart(cart);
//   } else {
//     removeCart(cart);
//   }
// });
