angular.module("OS").config(function($routeProvider){
    $routeProvider.when("/consultaOS",{
        templateUrl:"view/teste.html",
        controller:function(){
            console.log('aaaa');
        },
//        resolve:{
//            contatos : function(contatoApi){
//               return contatoApi.getContatos();
//            },
//             operadoras : function(operadorasApi){
//               return operadorasApi.getOperadoras();
//            }
//        }
    });
    
    $routeProvider.when("/",{
        templateUrl:"view/inicio.html",
    });
    
    $routeProvider.when("/ConfigSistema",{
        templateUrl:"view/configSistema.html"
    });
    
    $routeProvider.when("/error",{
        templateUrl:"view/notFound.html"
    });
    
     $routeProvider.otherwise({
         redirectTo:"/error"
     });
});
