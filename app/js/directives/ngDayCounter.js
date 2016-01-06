(function () {
    'use strict';

    angular
        .module('ngThingsComponents')
        .directive('ngDayCounter', ngDayCounter);

    function ngDayCounter() {

        var directive = {
            link: link,
            templateUrl: 'js/directives/ngDayCounter-tpl.html',
            restrict: 'EA',
            scope: {
                until: '=',
                since: '=',
                context: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
            scope.value = "??";
            if (scope.until) {
                scope.day = moment(scope.until).format("YYYY-MM-DD");
                scope.value = moment(scope.until).fromNow();
            } else if (scope.since) {
                scope.day = moment(scope.since).format("LL");
                scope.value = moment(scope.since).fromNow();
            }
        }

    }

})();