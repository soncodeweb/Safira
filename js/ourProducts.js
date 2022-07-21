import products from "./product.js";
import { renderCart, removeCart } from "./cart_pane.js";
function renderProducts(ourProduct) {
  ourProduct.map((val) => {
    if (val.old_price) {
      $(`
      <ul  class="item" data-id=${val.id}>
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
                <a href="" class="add-ourProduct" data-id=${val.id}><i class="fas fa-shopping-cart"></i></a>
              </li>
              <li>
                <a href=""><i class="far fa-heart"></i></a>
              </li>
              <li>
                <a href=""><i class="fas fa-undo"></i></a>
              </li>
              <li>
                <a href=""><i class="fas fa-search"></i></a>
              </li>
            </ul>
          </div>
          <div class="sale">
            <span>Sale!</span>
          </div>
        </li>
        <li><a href="">${val.name}</a></li>
        <li><a href="">${val.species}</a></li>
        <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
      </ul>
      `).appendTo("#ourProducts");
    } else {
      $(`
            <ul  class="item" data-id=${val.id}>
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
                      <a href=""  class="add-ourProduct" data-id=${val.id} ><i class="fas fa-shopping-cart"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="far fa-heart"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fas fa-undo"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fas fa-search"></i></a>
                    </li>
                  </ul>
                </div>
                
              </li>
              <li><a href="">${val.name}</a></li>
              <li><a href="">${val.species}</a></li>
              <li><span class="price">$${val.price}.00</span></li>
            </ul>
            `).appendTo("#ourProducts");
    }
  });
}

$(document).ready(function () {
  $("#ourProducts").owlCarousel({
    items: 5,
    margin: 20,
  });
});
renderProducts(products.newProduct);

// $(document).on("click", ".add-ourProduct", function () {
//   const id = $(this).parents(".item").data("id"); //  cai gì thì trả về cái đó
//   //console.log($(this).parents(".item1").attr("data-id"));// tra ve string
//   // kiemr tra san pham co trong gio hang chua
//   // console.log(id);
//   var cart = JSON.parse(localStorage.getItem("cart"));
//   var idx = cart.findIndex((val) =>
//      val.id === id
//   );

//   if (idx !== -1) {
//     cart[idx].quantity = cart[idx].quantity + 1;
//     localStorage.setItem("cart", JSON.stringify(cart));
//   } else {
//     const item = products.newProduct.find((val) => val.id === id);
//     cart.push({ ...item, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }
//   cart = JSON.parse(localStorage.getItem("cart"));
//   if (cart.length > 0) {
//     renderCart(cart);
//   } else {
//     removeCart(cart);
//   }
// });

$(document).on("click", ".add-ourProduct", function () {
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
