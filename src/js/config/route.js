/**
 * Created by 成林 on 2017/8/16.
 */
//设置路由
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
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
//设置白名单
angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://127.0.0.1/API/**'
    ])
}])