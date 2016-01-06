(function () {
    'use strict';

    angular
        .module("ngThingsComponents", [])
        .controller("mainCtrl", mainCtrl)
        ;

    function mainCtrl($scope) {
        $scope.hello = "Hello World";
    }

})();