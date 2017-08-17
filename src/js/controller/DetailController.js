/**
 * Created by 成林 on 2017/8/16.
 */
angular.module('app').controller('DetailController',['$scope','$stateParams','$sce',function ($scope,$stateParams,$sce) {
    console.log($stateParams.item);
    //设置信任授权
    $scope.html= $sce.trustAsHtml($stateParams.item);

}])

