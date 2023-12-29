'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$mdDialog',function($scope, $mdDialog) {
        var self = this;
        // Use the self variable for the consistent controllerAs syntax
        self.hidden = false;
        self.works = [
            {company:'Dediserv', date:'09/2014 - Current', position:'Mobile & Web Application Developer'},
            {company:'DT Group', date:'01/2014 - 08/2014', position:'Mobile & Web Application Developer'},
            {company:'Aselsan', date:'09/2013 - 11/2013', position:'Intern Engineer'},
        ];
        self.languages = [
            {name:'AngularJS', rate:"5"},
            {name:'JavaScript', rate:"4"},
            {name:'Android', rate:"4"},
            {name:'NodeJS', rate:"3"},
            {name:'Python', rate:"3"},
            {name:'Java', rate:"2"},
            {name:'ElasticSearch', rate:"4"},
            {name:'Nginx', rate:"2"},
            {name:'Tomcat', rate:"2"}
        ];
        self.items = [
            {name: "Linkedin", icon: "linkedin", direction: "down" },
            {name: "Twitter", icon: "twitter", direction: "top" },
            {name: "Facebook", icon: "facebook", direction: "down" },
            {name: "Google Hangout", icon: "hangouts", direction: "top" },
            {name: "Lab", icon: "laptop_mac", direction: "down" },
        ];
        self.openDialog = function($event, item) {
            // Show the dialog
            $mdDialog.show({
                clickOutsideToClose: true,
                controller: function($mdDialog) {
                    // Save the clicked item
                    this.item = item;
                    // Setup some handlers
                    this.close = function() {
                        $mdDialog.cancel();
                    };
                    this.submit = function() {
                        $mdDialog.hide();
                    };
                },
                controllerAs: 'dialog',
                templateUrl: 'dialog.html',
                targetEvent: $event
            });
        }
}])
    .filter('range', function() {
        return function(input, total) {
            total = parseInt(total);
            return Array.from({length: total}, (_, i) => i);
        };
    });