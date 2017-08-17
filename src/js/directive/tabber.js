/**
 * Created by 成林 on 2017/8/16.
 */
//自定义尾部
angular.module('app').directive('tabber',function () {
    return{
        restrict:'EA',
        templateUrl:'../views/tabber_tpl.html',
        controller:['$scope',function ($scope) {
            $scope.tabChange = function (index) {
                $scope.$emit('tab_notifce',{id:index})
                // console.log(index);
            }

        }]
    }
});
