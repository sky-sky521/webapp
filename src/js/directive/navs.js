/**
 * Created by 成林 on 2017/8/16.
 */
//自定义头部
angular.module('app').directive('navs',function () {
    return{
        restrict:'EA',
        templateUrl:'../views/nav_tpl.html',
        controller:['$scope',function ($scope) {
            // $scope.$on('app_notifce',function (e,regs) {
            //     console.log(regs.title);
            //     $scope.title = regs.title;
            // })

        }]
    }
});
