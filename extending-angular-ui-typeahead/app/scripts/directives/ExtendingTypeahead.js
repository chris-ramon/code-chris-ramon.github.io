'use strict';

angular.module('extendingAngularUiTypeaheadApp')
  .directive('extendingTypeahead', function ($timeout) {
    return {
      restrict: 'A',
      require: ['typeahead', 'ngModel'],
      link: function(scope, elm, attrs, ctrls) {
        scope.$watch(attrs.ngModel, function(newVal) {
          if(!foundMatches() && newVal)
            $timeout(function() { $(elm).trigger('openPopover'); });
          else
            $timeout(function() { $(elm).trigger('closePopover'); });
        });

        function foundMatches() {
          return ctrls[0].popUpEl.scope().matches.length > 0;
        }
      }
    }
  });
