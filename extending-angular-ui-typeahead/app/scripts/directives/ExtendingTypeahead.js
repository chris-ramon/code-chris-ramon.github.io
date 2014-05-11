'use strict';

angular.module('extendingAngularUiTypeaheadApp')
  .directive('extendingTypeahead', function ($timeout) {
    return {
      restrict: 'A',
      require: ['typeahead', 'ngModel'],
      link: function(scope, elm, attrs, ctrls) {
        var popoverSelector = '#' + attrs.id;
        scope.$watch(attrs.ngModel, function(newVal) {
          if(!foundMatches() && newVal)
            $timeout(function() { $(popoverSelector).trigger('openPopover'); });
          else
            $timeout(function() { $(popoverSelector).trigger('closePopover'); });
        });

        function foundMatches() {
          return ctrls[0].popUpEl.scope().matches.length > 0;
        }
      }
    }
  });
