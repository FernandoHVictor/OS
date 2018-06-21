angular.module('OS').controller('mainCtrl', function ($scope, $mdSidenav, osService) {
    $scope.teste = 'Olá mundo';
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
});

