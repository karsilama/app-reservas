(function(){
  'use strict';
  angular
  .module('app.widgets')
  .component('fixedHeader', {

    templateUrl : 'app/widgets/fixed-header/fixed-header.html',
    controller : fixedHeaderCtrl

  })

  fixedHeaderCtrl.$inject = ['customService']

  function fixedHeaderCtrl ( customService ) {

  }

})()
