"use strict";

import {GroceriesService} from './GroceriesService'

export default app => {
    app.service('groceriesService', GroceriesService);
}

