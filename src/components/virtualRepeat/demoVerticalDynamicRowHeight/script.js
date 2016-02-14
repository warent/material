(function () {
  'use strict';

    angular
      .module('virtualRepeatVerticalDynamicRowDemo', ['ngMaterial'])
      .controller('AppCtrl', function() {
        this.items = [];
        this.loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        for (var i = 0; i < 1000; i++) {
          this.items.push(this.loremIpsum.substring(
            Math.random() * ((this.loremIpsum.length - 2) - 20) + 20
            ,this.loremIpsum.length - 1
          ));
        }
      });

})();
