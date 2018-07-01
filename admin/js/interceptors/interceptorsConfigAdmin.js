angular.module("OSAdmin").config(function($httpProvider){
    $httpProvider.interceptors.push("httpInterceptor");
});

