// Thêm vào class baseAPI từ file baseAPI.js
import {baseAPI} from './baseAPI.js';

// Xuất ra class Product đc kế thừa từ class baseAPI đã import ở trên
export class Product extends baseAPI {
    endPoint = "products"; // Định nghĩa endPoint cho API

    // Phương thức lấy tất cả dữ liệu thông qua API
    getAllProduct() {
        return this.get(this.endPoint);
    }
    getProductById(id) {
        return this.getById(this.endPoint, id);
    }
    getProductByCategory(categoryId) {
        return this.getAllByOne('categories', categoryId, this.endPoint);
    }
    postProduct(data) {
        return this.post(this.endPoint, data);
    }
    patchProduct(id, data) {
        return this.patch(this.endPoint, id, data);
    }
    deleteProduct(id) {
        return this.delete(this.endPoint, id);
    }
    paginateProduct(page, limit) {
        return this.paginate(this.endPoint, page, limit);
    }
}

export class Category extends baseAPI {
    endPoint = "categories"; // Định nghĩa endPoint cho API

    // Phương thức lấy tất cả dữ liệu thông qua API
    getAllCategories() {
        return this.get(this.endPoint);
    }
    getCategoryById(id) {
        return this.getById(this.endPoint, id);
    }
    postCategory(data) {
        return this.post(this.endPoint, data);
    }
    patchCategory(id, data) {
        return this.patch(this.endPoint, id, data);
    }
    deleteCategory(id) {
        return this.delete(this.endPoint, id);
    }
}

export class Order extends baseAPI {
    endPoint = "orders"; // Định nghĩa endPoint cho API

    // Phương thức lấy tất cả dữ liệu thông qua API
    getAllOrders() {
        return this.get(this.endPoint);
    }
    getOrderById(id) {
        return this.getById(this.endPoint, id);
    }
    postOrder(data) {
        return this.post(this.endPoint, data);
    }
    patchOrder(id, data) { // For admin to edit status on order
        return this.patch(this.endPoint, id, data);
    }
    deleteOrder(id) {
        return this.delete(this.endPoint, id);
    }
    paginateOrder(page, limit) {
        return this.paginate(this.endPoint ,page, limit)
    }
}

export class Cart{

    // Phương thức lấy tất cả dữ liệu thông qua API
    getAllCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        return cart;
    }
    postCart(data) {
        // Đầu tiên lấy ra item cart
        let cart = JSON.parse(localStorage.getItem("cart"));

        // Nếu cart khác null tức cart đã có thì tiến hành tìm id của item trong cart để update quantity
        if(cart != null) {
            let flag = false; // Biến để kiểm tra tìm đc id của item trong cart hay chưa
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id == data.id) {
                    flag = true; // nếu tìm đc thì flag = true
                    let newCart = cart.map(obj => { // Tìm item trong cart đã có sau đó update quantity và map qua mảng mới là newCart
                        if(obj.id == data.id) {
                            obj.quantity += data.quantity;
                            obj.price += data.price;
                            return obj;
                        }
                        return obj
                    })
                    // Tiến hành xóa cart cũ để thêm cart đã đc update vào
                    localStorage.removeItem("cart");
                    localStorage.setItem("cart", JSON.stringify(newCart));
                }
            }
            if(flag == false) { // Nếu ko tìm đc id của item trong cart thì thêm mới 1 object vào array cart
                localStorage.removeItem("cart");
                cart.push(data);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        }
        else { // Ngược lại nếu chưa có cart thì set cart vào localstorage dưới dạng mảng
            const cart = [];
            cart.push(data);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
    deleteCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(cart != null) {
            let newCart = cart.filter(function(value, index) {
                if(value.id == id) {
                    return false;
                }
                return true;
            })
            // Tiến hành xóa cart cũ để thêm cart đã đc update vào
            localStorage.removeItem("cart");
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
        
    }
    
}


