angular.module("finalcountdown.factories", [])

    .factory('Book', ['$resource', function($resource) {
        return $resource("http://localhost:3000/api/books/:id", {id: "@id"});
    }]);