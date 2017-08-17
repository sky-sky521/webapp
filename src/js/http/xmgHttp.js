/**
 * Created by 成林 on 2017/8/16.
 */
angular.module('app').service('xmgHttp',['$http',function ($http) {
    this.jsonp = function (url,params,success,error) {
        $http({
            url:url,
            method:'jsonp',
            params:params
        }).then(function (regs) {
            if(success) success(regs);
        }).catch(function (err) {
            if(error) error(err);
        })
    }
}])
