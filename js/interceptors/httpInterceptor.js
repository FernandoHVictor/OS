angular.module("OS").factory("httpInterceptor", function ($q, $rootScope, $timeout, $location) {
    return{
        request: function (config) {
            $rootScope.loading = true;
            return config;
        },
        requestError: function (rejection) {
            $rootScope.loading = false;
            return $q.reject(rejection);
        },
        response: function (response) {
            $timeout(function () {
                $rootScope.loading = false;
            }, 1000);
            return response;
        },
        responseError: function (rejection) {
            $rootScope.loading = false;
            if (rejection.status === 404) {
                $location.path('/error');
            }
            return $q.reject(rejection);
        }
    };
});


