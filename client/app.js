var app=angular.module("finalcountdown", ["ngResource", "ngRoute", "finalcountdown.controllers", "finalcountdown.factories"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/books.html',
        controller: 'ListController'
    })
        .when('/:id', {
            templateUrl: 'views/single.html',
            controller: 'SingleController'
        })
}]);

