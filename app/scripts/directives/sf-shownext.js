'use strict';

angular.module('skillfariApp.directives.sfShownext', [])
  .directive('sfShownext', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var createSequenceOne = element.find("section.createSequenceOne");
        var createSequenceTwo = element.find("section.createSequenceTwo");
        var createSequenceThree = element.find("section.createSequenceThree");
        console.log(createSequenceOne);
        console.log(createSequenceTwo);
        console.log(createSequenceThree);

      }
    };
  });
