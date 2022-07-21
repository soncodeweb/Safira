import products from "./product.js";

function renderProducts(newProduct) {
  $(".newProduct-group-item1").empty();
  $(".newProduct-group-item2").empty();
  $(".newProduct-group-item3").empty();
  $(".newProduct-group-item4").empty();
  $(".newProduct-group-item5").empty();
  $(".newProduct-group-item6").empty();
  newProduct.filter((val, index) => {
    if (index < 2) {
      if (val.old_price) {
        $(`
        <ul  class="item" data-name=${val.name} data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                <li>
                  <a href=""><i class="fas fa-undo"></i></a>
                </li>
                <li class="quickview">
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
        `).appendTo(".newProduct-group-item1");
      } else {
        $(`
              <ul  class="item" data-name=${val.name} data-id=${val.id}>
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fas fa-undo"></i></a>
                      </li>
                      <li class="quickview">
                  <a href=""><i class="fas fa-search"></i></a>
                </li>
                    </ul>
                  </div>
                  
                </li>
                <li><a href="">${val.name}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item1");
      }
    } else if (index >= 2 && index < 4) {
      if (val.old_price) {
        $(`
        <ul  class="item" data-name=${val.name} data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                <li>
                  <a href=""><i class="fas fa-undo"></i></a>
                </li>
                <li class="quickview">
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
        `).appendTo(".newProduct-group-item2");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fas fa-undo"></i></a>
                      </li>
                      <li class="quickview">
                  <a href=""><i class="fas fa-search"></i></a>
                </li>
                    </ul>
                  </div>
                  
                </li>
                <li><a href="">${val.name}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item2");
      }
    } else if (index >= 4 && index < 6) {
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                <li>
                  <a href=""><i class="fas fa-undo"></i></a>
                </li>
                <li class="quickview">
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
        `).appendTo(".newProduct-group-item3");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fas fa-undo"></i></a>
                      </li>
                      <li class="quickview">
                      <a href=""><i class="fas fa-search"></i></a>
                    </li>
                    </ul>
                  </div>
                  
                </li>
                <li><a href="">${val.name}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item3");
      }
    } else if (index >= 6 && index < 8) {
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                <li>
                  <a href=""><i class="fas fa-undo"></i></a>
                </li>
                <li class="quickview">
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
        `).appendTo(".newProduct-group-item4");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fas fa-undo"></i></a>
                      </li>
                      <li class="quickview">
                  <a href=""><i class="fas fa-search"></i></a>
                </li>
                    </ul>
                  </div>
                  
                </li>
                <li><a href="">${val.name}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item4");
      }
    } else if (index >= 8 && index < 10) {
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                <li>
                  <a href=""><i class="fas fa-undo"></i></a>
                </li>
                <li class="quickview">
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
        `).appendTo(".newProduct-group-item5");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fas fa-undo"></i></a>
                      </li>
                      <li class="quickview">
                  <a href=""><i class="fas fa-search"></i></a>
                </li>
                    </ul>
                  </div>
                  
                </li>
                <li><a href="">${val.name}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item5");
      }
    } else if (index >= 10 && index < 12) {
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                <li>
                  <a href=""><i class="fas fa-undo"></i></a>
                </li>
                <li class="quickview">
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
        `).appendTo(".newProduct-group-item6");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                      </li>
                      <li class="add-heart">
                        <a href=""><i class="far fa-heart"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fas fa-undo"></i></a>
                      </li>
                      <li class="quickview">
                      <a href=""><i class="fas fa-search"></i></a>
                    </li>
                    </ul>
                  </div>
                  
                </li>
                <li><a href="">${val.name}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item6");
      }
    }
  });
}
renderProducts(products.newProduct);
// search products
$("#searchProducts").keyup(function (e) {
  const text = $(this).val();
  const products = products.newProduct.filter((val) =>
    val.name.toLowerCase().includes(text.toLowerCase())
  );
  console.log(products);
  $(".newProduct-group-item1").empty();
  $(".newProduct-group-item2").empty();
  $(".newProduct-group-item3").empty();
  $(".newProduct-group-item4").empty();
  $(".newProduct-group-item5").empty();
  $(".newProduct-group-item6").empty();
  products.filter((val, index) => {
    if (index < 2) {
      if (val.old_price) {
        $(`
        <ul  class="item" data-name=${val.name} data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
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
          <li><a href="">${val.name
            .split(text)
            .join(`<span style="color: red">${text}</span>`)}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${
            val.old_price
          }.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item1");
      } else {
        $(`
              <ul  class="item" data-name=${val.name} data-id=${val.id}>
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                <li><a href="">${val.name
                  .split(text)
                  .join(`<span style="color: red">${text}</span>`)}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item1");
      }
    } else if (index >= 2 && index < 4) {
      if (val.old_price) {
        $(`
        <ul  class="item" data-name=${val.name} data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
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
          <li><a href="">${val.name
            .split(text)
            .join(`<span style="color: red">${text}</span>`)}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${
            val.old_price
          }.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item2");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                <li><a href="">${val.name
                  .split(text)
                  .join(`<span style="color: red">${text}</span>`)}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item2");
      }
    } else if (index >= 4 && index < 6) {
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
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
          <li><a href="">${val.name
            .split(text)
            .join(`<span style="color: red">${text}</span>`)}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${
            val.old_price
          }.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item3");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                <li><a href="">${val.name
                  .split(text)
                  .join(`<span style="color: red">${text}</span>`)}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item3");
      }
    } else if (index >= 6 && index < 8) {
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
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
          <li><a href="">${val.name
            .split(text)
            .join(`<span style="color: red">${text}</span>`)}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${
            val.old_price
          }.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item4");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                <li><a href="">${val.name
                  .split(text)
                  .join(`<span style="color: red">${text}</span>`)}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item4");
      }
    } else if (index >= 8 && index < 10) {
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
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
          <li><a href="">${val.name
            .split(text)
            .join(`<span style="color: red">${text}</span>`)}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${
            val.old_price
          }.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item5");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                <li><a href="">${val.name
                  .split(text)
                  .join(`<span style="color: red">${text}</span>`)}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item5");
      }
    } else if (index >= 10 && index < 12) {
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
                </li>
                 <li class="add-heart">
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
          <li><a href="">${val.name
            .split(text)
            .join(`<span style="color: red">${text}</span>`)}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${
            val.old_price
          }.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item6");
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                <li><a href="">${val.name
                  .split(text)
                  .join(`<span style="color: red">${text}</span>`)}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item6");
      }
    }
  });
});
// close search products

$(document).ready(function () {
  $(".owl-carousel.products").owlCarousel({
    items: 5,
    margin: 20,
    nav: true,
  });
});
