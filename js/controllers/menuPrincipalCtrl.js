angular.module('OS').controller('menuPrincipalCtrl', function ($scope,osService,$location) {
  carregaItensMenu();
  function carregaItensMenu() {
        osService.getMenu().then(function (data) {
            $scope.menu = data.data;
        }, function (erro) {
            $scope.error = erro.statusText;
        });
    }
    
    $scope.abreSubMenu = function(acao){
        $location.url('/'+acao);
    }
});

