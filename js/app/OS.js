//instancia e configura o módulo
angular.module('OS', ['ngMaterial','ngRoute'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('indigo');
});
