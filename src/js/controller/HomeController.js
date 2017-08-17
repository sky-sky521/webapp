/**
 * Created by 成林 on 2017/8/16.
 */
angular.module('app').controller('HomeController',['$scope','xmgHttp',function ($scope,xmgHttp) {
    $scope.homeTitle = '首页1';
    // $http({
    //     url:'http://127.0.0.1/API/home.php',
    //     method:'jsonp'
    // }).then(function (regs) {
    //     console.log(regs);
    //     $scope.dataList = regs.data;
    // }).catch(function (err) {
    //     console.log(err);
    // })
    var url = 'http://127.0.0.1/API/home.php';
    xmgHttp.jsonp(url,null,function (regs) {
        console.log(regs);
        $scope.dataList = regs.data;
    },function (err) {
        console.log(err);
    })
}]);

