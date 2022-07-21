import products from "./product.js";

$(document).ready(function () {
  $("#bestSellers").owlCarousel({
    items: 2,
  });
});

function renderProducts(bestSeller) {
  bestSeller.filter((val, index) => {
    if (index < 3) {
      if (val.old_price) {
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src="./image/${val.img}" alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                          <span class="old-price">$${val.old_price}.00</span>
                          <span class="price">$${val.price}.00</span>
                        </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item1");
      } else {
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src="./image/${val.img}" alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                          <span class="price">$${val.price}.00</span>
                        </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item1");
      }
    } else if (index >= 3 && index < 6) {
      if (val.old_price) {
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src="./image/${val.img}" alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                          <span class="old-price">$${val.old_price}.00</span>
                          <span class="price">$${val.price}.00</span>
                        </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item2");
      } else {
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src="./image/${val.img}" alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                        <span class="price">$${val.price}.00</span>
                      </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item2");
      }
    } else {
      if (val.old_price) {
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src="./image/${val.img}" alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                          <span class="old-price">$${val.old_price}.00</span>
                          <span class="price">$${val.price}.00</span>
                        </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item3");
      } else {
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src="./image/${val.img}" alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                        <span class="price">$${val.price}.00</span>
                      </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item3");
      }
    }
  });
}

renderProducts(products.newProduct);
