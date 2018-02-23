"use strict";

function productModel() {

    function Product(id, title, isCart) {
        this.id = id;
        this.title = title;
        this.isCart = isCart;
    }

    Product.build = function (data) {
        return new Product(
            data.id,
            data.title,
            data.isCart
        );
    };

    return Product;
}

export {productModel}