(function(){

  'use strict';

  angular
    .module('app.services')
    .service('customService', customService) ;

  customService.$inject = ['$injector'] ;

  function customService ( $injector ) {

    return function(){

      return $injector.instantiate ( function() {

        this.n = 1 ;

      } ) ;

    } ;

  }

})()
