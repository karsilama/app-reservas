(function(){

  'use strict';

  angular
    .module('app.partials')
    .controller('homeController', homeControllerFn) ;

    homeControllerFn.$inject = ['customService'] ;

    function homeControllerFn ( customService ) {

      // invoking a non singleton instance : new customService() ;

    }

})();
