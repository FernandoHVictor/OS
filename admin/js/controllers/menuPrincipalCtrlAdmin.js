angular.module('OSAdmin').controller('menuPrincipalCtrlAdmin', function ($scope,osService,$location) {
  carregaItensMenu();
  function carregaItensMenu() {
        osService.getMenuAdmin().then(function (data) {
            $scope.menu = data.data;
        }, function (erro) {
            $scope.error = erro.statusText;
        });
    }
    
    $scope.abreSubMenu = function(acao){
        $location.url('/'+acao);
    }
});

