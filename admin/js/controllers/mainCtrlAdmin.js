angular.module('OSAdmin').controller('mainCtrlAdmin', function ($scope, $mdSidenav, osService, $mdToast) {
    $scope.toggleLeft = sidebarToggler('left');
    carregaDadosPrincipais();
    function sidebarToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }

    function carregaDadosPrincipais() {
        osService.getDados().then(function (data) {
            $scope.dados = data.data;
        }, function (erro) {
            $scope.error = erro.statusText;
        });
    }

    $scope.showSimpleToast = function () {
        var pinTo = "Bottom Left"
        $mdToast.show(
                $mdToast.simple()
                .textContent('Simple Toast!')
                .position(pinTo)
                .hideDelay(3000)
                );
    };
});

