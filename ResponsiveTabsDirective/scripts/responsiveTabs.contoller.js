(function () {
    app.controller('responsiveTabsController', ['$scope', 'tabsFactory', function ($scope, tabsFactory) {
        $scope.tabs = tabsFactory.getAllTabs();
        $scope.firstTab = $scope.tabs[0];
        $scope.firstTab.state = false;
        $scope.isDefault = true;
        $scope.toggle = function (tab, repeaterIndex) {
            $scope.tabs.forEach(function (tab) {
                if (tab.index != repeaterIndex) {
                    tab.state = true;
                }
            })
            if (tab.index == repeaterIndex && tab.state == false) {
                tab.state = true;
            }
            else {
                tab.state = false;
            }
        };
    }])
})();
