/**
 * Created by 成林 on 2017/8/15.
 */
;(function (angular) {
    var app = angular.module('app',['ui.router']);
    /*
    app.controller('AppController',['$scope','$window','$location',function ($scope,$window,$location) {
        // $scope.title='每日一刻';
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
        }
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
    //自定义头部
    app.directive('navs',function () {
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
    //自定义尾部
    app.directive('tabber',function () {
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
    //创建路由
    app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('home',{
            url:'/home',
            views:{
                home:{
                    templateUrl:'../views/home_tpl.html',
                    controller:'HomeController'
                },
                author:{
                    template:'<h1>作者</h1>'
                },
                content:{
                    template:'<h1>栏目</h1>'
                },
                my:{
                    template:'<h1>我的</h1>'
                }
            }
        }).state('home.list',{
            url:'/list',
            templateUrl:'../views/list_tpl.html'
        }).state('home.detail',{
            url:'/detail/:item',
            template:'<div ng-bind-html="html" class="detail_content"></div>',
            controller:'DetailController'
        });
        $urlRouterProvider.otherwise('/home/list');

    }])
   app.controller('DetailController',['$scope','$stateParams','$sce',function ($scope,$stateParams,$sce) {
        console.log($stateParams.item);
        //设置信任授权
        $scope.html= $sce.trustAsHtml($stateParams.item);

    }])
    app.controller('HomeController',['$scope','$http',function ($scope,$http) {
        $scope.homeTitle = '首页1';
        $http({
            url:'http://127.0.0.1/API/home.php',
            method:'jsonp'
        }).then(function (regs) {
            console.log(regs);
            $scope.dataList = regs.data;
        }).catch(function (err) {
            console.log(err);
        })
    }]);
    //设置白名单
    app.config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://127.0.0.1/API/**'
        ])
    }])
     */
})(angular);