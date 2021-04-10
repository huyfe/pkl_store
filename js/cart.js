import * as myModule from './functions.js';
function showCart() {
    let cartBox = document.querySelector("#cartBox");
    cartBox.innerHTML = myModule.getCart();
    changeQuantityCart();
}

function addCart() {
    let addToCart = document.querySelectorAll(".add-to-cart");
    countCart();
}

function deleteCart(cb) {
    let buttonDel = document.querySelectorAll(".deleteCart");
    buttonDel.forEach(function(element) {
        element.addEventListener("click", function(e) {
            e.preventDefault();
            if(confirm("Are you sure you want to delete")) {
                let tr = element.parentNode.parentNode;
                console.log(tr);
                tr.classList.add("animate__animated", "animate__fadeOutLeft");
                let id = element.getAttribute("data-id");
                setTimeout(function() {
                    myModule.deleteCart(id);
                    cb();
                    deleteCart(showCart);
                    countCart();
                }, 1000);
            }
        })
    })
}

function countCart() {
    let count = myModule.getAmountCart();
    let countCartElement = document.querySelector("#countCart");
    countCartElement.innerHTML = count;
}

function changeQuantityCart() {
    // Quantity
    $('.qty button').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

}

(async function main() {
    showCart();
    deleteCart(showCart);
    addCart();
    countCart()
})()