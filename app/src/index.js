const angular = require('angular');
const uirouter = require('angular-ui-router');
const localStorage = require('angular-local-storage');
const ngTouch = require('angular-touch');

require('./styles/styles.css');

const app = angular.module('app',[uirouter, localStorage, ngTouch]);

require('./models').default(app);
require('./services').default(app);
require('./config')(app);
require('./controllers').default(app);

