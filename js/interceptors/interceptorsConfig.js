angular.module("OS").config(function($httpProvider){
    $httpProvider.interceptors.push("httpInterceptor");
});

