// var newProducts_bestSeller = [
//   {
//     id: 1,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/9.jpg",
//     name1: "Bottol Gaurd (Lauki)",
//     species: "Broad Beans",
//     old_price: 85,
//     price: 60,
//   },
//   {
//     id: 2,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/19.jpg",
//     name1: "Pineapple Imported",
//     species: "Leafy green",
//     price: 148,
//   },
//   {
//     id: 3,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//     name1: "Apple Golden Local",
//     species: "Green vegetables",
//     price: 80,
//   },
//   {
//     id: 4,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/6.jpg",
//     name1: "Coriander Leaves",
//     species: "Allium",
//     price: 0,
//   },
//   {
//     id: 5,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/16.jpg",
//     name1: "Sugar Cane (Gunderi)",
//     species: "Fresh beans",
//     old_price: 68,
//     price: 60,
//   },
//   {
//     id: 6,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/5.jpg",
//     name1: "Grape Fruit Local",
//     species: "Allium",
//     price: 115,
//   },
//   {
//     id: 7,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/13.jpg",
//     name1: "Apple Grourd - 1 Kg",
//     species: "Cruciferous",
//     old_price: 70,
//     price: 65,
//   },

//   {
//     id: 8,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/12.jpg",
//     name1: "German Chilies Local",
//     species: "Green peas",
//     price: 95,
//   },
//   {
//     id: 9,
//     img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/11.jpg",
//     name1: "German Chilies Local",
//     species: "Green peas",
//     price: 95,
//   },
// ];

import product from "./product.js";

$(document).ready(function () {
  $("#trendingProducts").owlCarousel({
    items: 3,
  });
});

function renderProducts(trendingProducts) {
  trendingProducts.filter((val, index) => {
    if (index < 3) {
      if (val.old_price) {
        $(`
          <div class="item">
                        <div class="image-item-trendingProducts">
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
          `).appendTo(".trendingProducts-group-item1");
      } else {
        $(`
          <div class="item">
                        <div class="image-item-trendingProducts">
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
          `).appendTo(".trendingProducts-group-item1");
      }
    } else if (index >= 3 && index < 6) {
      if (val.old_price) {
        $(`
          <div class="item">
                        <div class="image-item-trendingProducts">
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
          `).appendTo(".trendingProducts-group-item2");
      } else {
        $(`
          <div class="item">
                        <div class="image-item-trendingProducts">
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
          `).appendTo(".trendingProducts-group-item2");
      }
    } else if (index >= 6 && index < 9) {
      if (val.old_price) {
        $(`
          <div class="item">
                        <div class="image-item-trendingProducts">
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
          `).appendTo(".trendingProducts-group-item3");
      } else {
        $(`
          <div class="item">
                        <div class="image-item-trendingProducts">
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
          `).appendTo(".trendingProducts-group-item3");
      }
    }
  });
}
renderProducts(product.newProduct);
