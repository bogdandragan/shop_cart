"use strict";

class MainController {

    constructor($state, groceriesService){
        this.$state = $state;
        this.groceriesService = groceriesService;

        this.products = this.groceriesService.appData;
        this.filterProducts = {};
        this.inputLength = 27;
        this.inputData = {};
    }

    swipeRight(product){
        product.isCart = true;
        this.groceriesService.saveProducts(this.products);
    }

    swipeLeft(product){
        product.isCart = false;
        this.groceriesService.saveProducts(this.products);
    }

    cancelAddProduct(){
        this.inputData = {};
        this.$state.go('edit');
    }

    switchToViewMode(){
        this.$state.go('home');
    }

    deleteProduct(id){
        console.log(id);
        this.groceriesService.deleteProduct(id);
    }

    countInputLength($event, length){
        if(length == this.inputLength){
            $event.preventDefault();
        }
    }

    addProduct(){
        this.groceriesService.addProduct(this.inputData.productTitle);
        this.inputData = {};
        this.$state.go('edit');
    }

}

export {MainController}