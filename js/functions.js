import {Product, Category, Order, Cart} from './manager.js';
const product = new Product();
const category = new Category();
const order = new Order();
const cart = new Cart();

export async function returnCategories() {
    let categoriesList = await category.getAllCategories();
    let str = "";
    categoriesList.data.forEach(function(element) {
        str += `<li class="nav-item">
        <a class="nav-link" href="#" data-id="${element.id}"><i class="fas fa-angle-double-right"></i>${element.name}</a>
    </li>`
    })
    return str;
}

export async function returnProducts() {
    let productList = await product.getAllProducts();
    let str = "";
    productList.data.forEach(function(element) {
        str += `<div class="col-md-4">
        <div class="product-item">
            <div class="product-title">
                <a class="detail" href="#" data-id="${element.id}">${element.name.toUpperCase()}</a>
                <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
            <div class="product-image">
                <a href="#" class="detail" data-id="${element.id}">
                    <img src="img/${element.image}" alt="Product Image">
                </a>
                <div class="product-action">
                    <p class="product__id" hidden>${element.id}</p>
                    <p class="product__name" hidden>${element.name}</p>
                    <p class="product__image" hidden>${element.image}</p>
                    <p class="product__price" hidden>${element.price}</p>
                    <p class="product__quantity" hidden>1</p>

                    <a href="#" class="add-to-cart" data-id="${element.id}"><i class="fa fa-cart-plus"></i></a>
                    <a href="#" class="detail" data-id="${element.id}><i class="fas fa-search"></i><i class="fas fa-search"></i></a>
                </div>
            </div>
            <div class="product-price">
                <h3>${element.price.toLocaleString('vi')} <span>VND</span></h3>
                <a class="btn mua-ngay" href="#"><i class="fa fa-shopping-cart"></i>Mua Ngay</a>
            </div>
        </div>
    </div>`
    })
    return str;
}

export async function returnHotProducts() {
    let productList = await product.paginateProduct(1, 6);
    let str = "";
    productList.data.forEach(function(element) {
        str += `<div class="col-lg-3">
        <div class="product-item">
            <div class="product-title">
                <a class="detail" href="#" data-id="${element.id}">${element.name.toUpperCase()}</a>
                <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
            <div class="product-image">
                <a href="#" class="detail" data-id="${element.id}">
                    <img src="img/${element.image}" alt="Product Image">
                </a>
                <div class="product-action">
                    <p class="product__id" hidden>${element.id}</p>
                    <p class="product__name" hidden>${element.name}</p>
                    <p class="product__image" hidden>${element.image}</p>
                    <p class="product__price" hidden>${element.price}</p>
                    <p class="product__quantity" hidden>1</p>

                    <a href="#" class="add-to-cart" data-id="${element.id}"><i class="fa fa-cart-plus"></i></a>
                    <a href="#" class="detail" data-id="${element.id}><i class="fas fa-search"></i><i class="fas fa-search"></i></a>
                </div>
            </div>
            <div class="product-price">
                <h3>${element.price.toLocaleString('vi')} <span>VND</span></h3>
                <a class="btn mua-ngay" href="#"><i class="fa fa-shopping-cart"></i>Mua Ngay</a>
            </div>
        </div>
    </div>`
    })
    return str;
}

export async function returnNewProducts() {
    let productList = await product.paginateProduct(2, 6);
    let str = "";
    productList.data.forEach(function(element) {
        str += `<div class="col-lg-3">
        <div class="product-item">
            <div class="product-title">
                <a class="detail" href="#" data-id="${element.id}">${element.name.toUpperCase()}</a>
                <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
            <div class="product-image">
                <a href="#" class="detail" data-id="${element.id}">
                    <img src="img/${element.image}" alt="Product Image">
                </a>
                <div class="product-action">
                    <p class="product__id" hidden>${element.id}</p>
                    <p class="product__name" hidden>${element.name}</p>
                    <p class="product__image" hidden>${element.image}</p>
                    <p class="product__price" hidden>${element.price}</p>
                    <p class="product__quantity" hidden>1</p>

                    <a href="#" class="add-to-cart" data-id="${element.id}"><i class="fa fa-cart-plus"></i></a>
                    <a href="#" class="detail" data-id="${element.id}><i class="fas fa-search"></i><i class="fas fa-search"></i></a>
                </div>
            </div>
            <div class="product-price">
                <h3>${element.price.toLocaleString('vi')} <span>VND</span></h3>
                <a class="btn mua-ngay" href="#"><i class="fa fa-shopping-cart"></i>Mua Ngay</a>
            </div>
        </div>
    </div>`
    })
    return str;
}

export function getCart() {
    let arrCart = cart.getAllCart();
    if(arrCart == null) return;
        let str = "";
        arrCart.forEach(function(element) {
            str += `
            <tr>
                <td>
                    <div class="img">
                        <a href="#"><img src="img/${element.image}" alt="Image"></a>
                        <p>${element.name}</p>
                    </div>
                </td>
                <td>${element.price.toLocaleString("vi")}</td>
                <td>
                    <div class="qty">
                        <button class="btn-minus"><i class="fa fa-minus"></i></button>
                        <input id="quantity" type="text" value="${element.quantity}">
                        <button class="btn-plus"><i class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>${element.total.toLocaleString("vi")} VND</td>
                <td><button class="deleteCart" data-id="${element.id}"><i class="fa fa-trash"></i></button></td>
            </tr>
            `;
        })
        return str;
}

export function getAmountCart() {
    let count = cart.getAllCart();
    return count.length;
}

export function deleteCart(id) {
    cart.deleteCart(id);
} 

export function addToCart(data) {
    cart.postCart(data);
} 