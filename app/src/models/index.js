"use strict";

import {productModel} from './ProductModel'

export default app => {
    app.factory('Product', productModel);
}

