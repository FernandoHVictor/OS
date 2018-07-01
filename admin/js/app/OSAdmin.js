//instancia e configura o módulo
angular.module('OSAdmin', ['ngMaterial','ngRoute'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('indigo');
});
