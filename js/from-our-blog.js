const blog = [
  {
    id: 1,
    img: "blog1.jpg",
    species: "Citrus, Fresh, Stone fruit",
    title: "Creamy shrimp pasta with corn and tomatoes",
    time: "April 25, 2020",
  },
  {
    id: 2,
    img: "blog2.jpg",
    species: "Berries, Stone fruit, Tropical",
    title: "Angel hair pasta with fresh tomatoes and herbs",
    time: "April 24, 2020",
  },
  {
    id: 3,
    img: "blog3.jpg",
    species: "Berries, Citrus, Fresh",
    title: "Pasta with shrimp and sun dried tomato sauce",
    time: "April 24, 2020",
  },
  {
    id: 4,
    img: "blog1.jpg",
    species: "Berries, Stone fruit, Tropical",
    title: "Cheesy rice and broccoli casserole",
    time: "April 23, 2020",
  },
];

blog.map((val) => {
  $(`
    <div class="list">
    <img src="./image/${val.img}">
    <div class="item">
      <div class="category">
        <a href="">${val.species}</a>
      </div>
      <h2 class="title"><a href="">${val.title}</a>
      </h2>
    </div>
    <div class="time">${val.time}</div>
    </div>
    `).appendTo(".owl-carousel.content-from-our-blog");
});

$(document).ready(function () {
  $(".owl-carousel.content-from-our-blog").owlCarousel({
    margin: 15,
  });
});
