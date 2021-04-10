import * as myModule from './functions.js';

async function showCategories() {
    let categories = await myModule.returnCategories();
    document.getElementById("categoryBox").innerHTML = categories;
}


async function showHotProducts() {
    let products = await myModule.returnHotProducts();
    let hotProductBox = document.getElementById("hotProductBox");
    hotProductBox.classList.add("row", "align-items-center", "product-slider", "product-slider-4");
    hotProductBox.innerHTML += products;
}

async function showNewProducts() {
    let products = await myModule.returnNewProducts();
    let newProductBox = document.getElementById("newProductBox");
    newProductBox.classList.add("row", "align-items-center", "product-slider", "product-slider-4");
    newProductBox.innerHTML = products;
}

function sliderProduct() {
    // Product Slider 4 Column
    $('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
}

function addCart() {
    let buttons = document.querySelectorAll(".add-to-cart"); 
    buttons.forEach(function(element) {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            element.innerHTML = `<i class="fas fa-check-circle"></i>`;
            let item = element.parentNode;
            let id = null;
            let name = null;
            let price = null;
            let image = null;
            let quantity = null;
            for(let j = 0; j < item.childNodes.length; j++) {
                if(item.childNodes[j].className == "product__id") {
                    id = Number(item.childNodes[j].innerHTML);
                }
                if(item.childNodes[j].className == "product__name") {
                    name = item.childNodes[j].innerHTML;
                }
                if(item.childNodes[j].className == "product__price") {
                    price = Number(item.childNodes[j].innerHTML);
                }
                if(item.childNodes[j].className == "product__image") {
                    image = item.childNodes[j].innerHTML;
                }
                if(item.childNodes[j].className == "product__quantity") {
                    quantity = Number(item.childNodes[j].innerHTML);
                }
            }
            let total = 0;
            total += price*quantity;
            let data = {
                id: id,
                name: name,
                price: price,
                image: image,
                quantity: quantity,
                total: total
            }
            myModule.addToCart(data);
            countCart();
        })
    })
}

function countCart() {
    let count = myModule.getAmountCart();
    let countCartElement = document.querySelector("#countCart");
    countCartElement.innerHTML = count;
}

// IIFE main function
(async function main() {
    await showCategories();
    await showHotProducts();
    await showNewProducts();
    sliderProduct();
    addCart();
    countCart();
})()
