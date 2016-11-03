(function(){

  'use strict';

  angular
    .module('app.partials')
    .controller('homeController', homeControllerFn) ;

    homeControllerFn.$inject = ['customService'] ;

    function homeControllerFn ( customService ) {

      var a  = new customService() ;
      var b = new customService() ;

      a.n++;
      a.n++;

      b.n++;
      b.n++;
      b.n++;

      console.log (a)
      console.log (b)
      console.log (new customService().n++)

    }

})();
