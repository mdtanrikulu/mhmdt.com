'use strict';

// Define the view1 module
angular.module('myApp.view1', ['ngRoute'])

  // Configure the route for the view1 module
  .config(['$routeProvider', function($routeProvider) {
    // Define the route for the /me URL
    $routeProvider.when('/me', {
      // Set the template URL for the view
      templateUrl: 'view1/view1.html',
      // Set the controller for the view
      controller: 'View1Ctrl'
    });
  }])

  // Define the View1 controller
  .controller('View1Ctrl', ['$scope', function($scope) {
    // Add controller logic here
  }]);
