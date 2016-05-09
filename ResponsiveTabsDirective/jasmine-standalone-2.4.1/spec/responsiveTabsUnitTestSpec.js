describe('responsiveTabsControllerTest', function () {
    beforeEach(angular.mock.module('app'));
    var $controller;

    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    
    var $scope, controller;
    beforeEach(angular.mock.inject(function (tabsFactory) {
        $scope = {};
            spyOn(tabsFactory, 'getAllTabs').and.callFake(function () {
                var tab = function (index, title, description, state) {
                    this.index = index;
                    this.title = title;
                    this.description = description;
                    this.sate = state;
                }
                var tabs = [
                new tab(0, "Tab 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", true),
                new tab(1, "Tab 2 this is a long title", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", true),
                new tab(2, "Tab 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", true)
                ];
                return tabs;
            })
            controller = $controller('responsiveTabsController', { $scope: $scope, tabsFactory: tabsFactory });
    }));
   
    describe('toggle tabs', function () {
        it('Changes the selected tab state true to false', function () {
                $scope.toggle($scope.tabs[2], 2);
                expect($scope.tabs[2].state).toEqual(false);
            })

        it('sets the state of the unselected tabs to true', function () {
            $scope.toggle($scope.tabs[1], 0);
            expect($scope.tabs[2].state).toEqual(true);
        })
        
        it('closes the current tab by clicking it', function () {
            $scope.tabs[1].state = false;
            $scope.toggle($scope.tabs[1], 1);
            expect($scope.tabs[2].state).toEqual(true);
        })
    });

    
})