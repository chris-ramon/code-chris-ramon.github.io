'use strict';

angular
  .module('extendingAngularUiTypeaheadApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $tooltipProvider) {
    $tooltipProvider.setTriggers({'openPopover': 'closePopover'});

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
