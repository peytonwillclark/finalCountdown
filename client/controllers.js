angular.module("finalcountdown.controllers",[])

    .controller('ListController',['$scope', 'Book', function($scope, Book){
        Book.query(function(success){
            $scope.books = success;
            console.log(success);
        })
    }])

    .controller("SingleController",["$scope", "$routeParams", "Book", function($scope, $routeParams, Book){
        Book.get({id: $routeParams.id}, function(success){
            $scope.book = success;
            console.log(success);
        })
    }]);