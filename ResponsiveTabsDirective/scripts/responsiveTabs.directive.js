(function () {
    'use strict';
    app.directive('responsiveTabsDirective', function () {
        return {
            scope:{},
            templateUrl: 'html templates/responsiveTabs.template.html',
            controller: 'responsiveTabsController'
        };
    });
})();