"use strict";

module.exports = function (app) {
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    header: {
                        template: require('./views/header-home.html')
                    },
                    main: {
                        template: require('./views/content.html')
                    },
                    footer: {
                        template: require('./views/footer.html')
                    }
                },
                data: {title: 'Home', description: 'Home page'}
            })
            .state('edit', {
                url: '/edit',
                views: {
                    header: {
                        template: require('./views/header-edit.html')
                    },
                    main: {
                        template: require('./views/content.html')
                    },
                    footer: {
                        template: require('./views/footer.html')
                    }
                },
                data: {title: 'Edit mode', description: 'Edit mode page', isEditMode: true}
            })
            .state('new', {
                url: '/new',
                views: {
                    header: {
                        template: require('./views/header-new.html')
                    },
                    main: {
                        template: require('./views/content-new.html')
                    }
                },
                data: {title: 'New item', description: 'New item  page'}
            })
    }).run(function ($rootScope, $state) {
        $rootScope.$state = $state;

        $rootScope.$on('$stateChangeError', function (evt, to, toParams, from, fromParams, error) {
            console.log(error);
            $state.go('/');
        })
    })

}
