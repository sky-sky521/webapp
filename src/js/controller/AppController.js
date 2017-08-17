/**
 * Created by 成林 on 2017/8/16.
 */
angular.module('app').controller('AppController',['$scope','$window','$location',function ($scope,$window,$location) {
    $scope.title='每日一刻';
    $scope.titleArr = ['首页','作者','栏目','我的'];
    $scope.title = '首页';
    //记录当前锁定的索引
    $scope.index = 0;
    $scope.$on('tab_notifce',function (e,regs) {

        var index = regs.id;
        // console.log(index);
        $scope.index = index;
        // var titleArr = ['首页','作者','栏目','我的'];
        // $scope.$broadcast('app_notifce',{title:$scope.titleArr[index]})
        $scope.title = $scope.titleArr[index];//根据作用域，子集没有到父级找
    });
    //返回按钮
    $scope.back =function () {
        $window.history.back();
    };
    //返回按钮及tabber的显示隐藏
    //监听url的变化
    $scope.location=$location;
    //显示
    $scope.isShow = true;
    $scope.$watch('location.url()',function (newV,oldV) {
        var index = newV.toString().indexOf('list');
//              indexof  这个方法值为-1表示没有这个元素
        if(index !=-1){
            //当前是list
            $scope.isShow= true;
        }else {
            $scope.isShow= false;
        }

    })
}]);
