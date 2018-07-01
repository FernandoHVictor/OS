angular.module("OSAdmin").service("osService",function($http,valoresPadrao){
    this.getDados = function(){
        return  $http.get(valoresPadrao.urlWS + "/dados");
    };
    this.getMenuAdmin = function(){
        return  $http.get(valoresPadrao.urlWS + "/menuAdmin");
    };
//    this.addContatos = function(contato){
//        return  $http.put(listaValues.urlWS + "/contatos",contato);
//    };
//    this.getOperadoras= function(){
//        return  $http.get(listaValues.urlWS + "/operadoras");
//    };
});


