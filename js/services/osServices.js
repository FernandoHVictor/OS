angular.module("OS").service("osService",function($http,valoresPadrao){
    this.getDados = function(){
        return  $http.get(valoresPadrao.urlWS + "/dados");
    };
    this.getMenu = function(){
        return  $http.get(valoresPadrao.urlWS + "/menu");
    };
//    this.addContatos = function(contato){
//        return  $http.put(listaValues.urlWS + "/contatos",contato);
//    };
//    this.getOperadoras= function(){
//        return  $http.get(listaValues.urlWS + "/operadoras");
//    };
});


