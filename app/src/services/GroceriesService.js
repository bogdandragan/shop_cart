"use strict";

class GroceriesService {

    constructor(localStorageService, $state, Product) {
        this.localStorageService = localStorageService;
        this.$state = $state;
        this.Product = Product;

        this.appData = [];

        let data = this.localStorageService.get('appData');

        if (!data) {
            data = [
                this.Product.build({id: this.generatePseudoId(), title: "Milk 1l", isCart: false}),
                this.Product.build({id: this.generatePseudoId(), title: "Eggs Medium 12 pack", isCart: true}),
                this.Product.build({id: this.generatePseudoId(), title: "Fresh Basil", isCart: false}),
                this.Product.build({id: this.generatePseudoId(), title: "Wholegrain Bread 1 pkg", isCart: true}),
                this.Product.build({id: this.generatePseudoId(), title: "Ground Coffe 200g", isCart: true}),
                this.Product.build({id: this.generatePseudoId(), title: "Red Wine", isCart: false}),
                this.Product.build({id: this.generatePseudoId(), title: "Mozzarella Cheese 150g", isCart: false}),
                this.Product.build({id: this.generatePseudoId(), title: "Orange Juice 1l", isCart: true}),
                this.Product.build({id: this.generatePseudoId(), title: "Tomatoes", isCart: false}),
                this.Product.build({id: this.generatePseudoId(), title: "Potatoes", isCart: false})
            ];

            this.localStorageService.set('appData', data);
        }

        angular.copy(data, this.appData);
    }

    generatePseudoId(){
        return Math.floor(Math.random() * 1000000000);
    }

    saveProducts(products) {
        this.localStorageService.set('appData', products);
    }

    deleteProduct(id) {
        let products = this.appData.filter(product => product.id !== id);
        angular.copy(products, this.appData);
        this.saveProducts(this.appData);
    }

    addProduct(title) {
        let product = this.Product.build({id: this.generatePseudoId(), title: title, isCart: false});
        this.appData.push(product);
        this.saveProducts(this.appData);
    }
}

export {GroceriesService}
