(function () {
  'use strict';

    angular
      .module('virtualRepeatVerticalDynamicRowDemo', ['ngMaterial'])
      .controller('AppCtrl', function() {
        this.items = [];
        for (var i = 0; i < 1000; i++) {
          this.items.push(i);
        }
      });

})();
