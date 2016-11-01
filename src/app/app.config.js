(function(){

  'use strict';

  angular
    .module('app')
    .config(configFn) ;

    configFn.$inject = ['$stateProvider', '$urlRouterProvider'] ;

    function configFn ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home') ;

      $stateProvider
        .state ( 'home', {
          url : '/home',
          templateUrl : 'app/partials/home/home.html',
          controller : 'homeController',
          controllerAs : 'homeCtrl'
        } )

    }

})();
