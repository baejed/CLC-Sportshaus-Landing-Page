var header = document.getElementById("header");
header.addEventListener('click', scrollTop);

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "NIKE SB DUNK",
    price: 1798,
    colors: [
      {
        code: "Pink",
        img: "shoeShowcase/shoe11.png",
      },
      {
        code: "darkblue",
        img: "",
      },
    ],
  },
  {
    id: 2,
    title: "PRECISION 6",
    price: 1799,
    colors: [
      {
        code: "lightgray",
        img: "",
      },
      {
        code: "green",
        img: "",
      },
    ],
  },
  {
    id: 3,
    title: "VANS",
    price: 799,
    colors: [
      {
        code: "lightgray",
        img: "",
      },
      {
        code: "green",
        img: "",
      },
    ],
  },
  {
    id: 4,
    title: "JORDAN",
    price: 1799,
    colors: [
      {
        code: "black",
        img: "",
      },
      {
        code: "lightgray",
        img: "",
      },
    ],
  },
  {
    id: 5,
    title: "KD 15 PEARL",
    price: 1799,
    colors: [
      {
        code: "gray",
        img: "",
      },
      {
        code: "black",
        img: "",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

function scrollTop() {
  window.scrollTo(0, 0);
}
