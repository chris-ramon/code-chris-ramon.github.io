'use strict';

angular.module('extendingAngularUiTypeaheadApp')
  .controller('MainCtrl', function ($scope, StateService) {
    $scope.states = StateService.getAll();
  });
