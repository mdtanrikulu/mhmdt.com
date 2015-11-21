'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial',
    'ngAria',
    'ngMdIcons',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/me'});
    }])

    .controller('AppCtrl', ['$scope', '$mdDialog', function (sc, md) {
        sc.status = '  ';

        sc.techs =[
        {name:"AngularJS"},
        {name:"AngularJS Loader"}
        ]


        sc.hideDialog = md.hide;
        sc.showDialog = sc.showAlert;
        sc.showAlert = function(ev) {
            md.show(
                {
                    targetEvent: ev,
                    scope: sc.$new(),
                    template:
                    '<md-dialog>' +
                    '   <md-title>Made with...</md-title>' +
                    '   <md-content>' +
                    '       <ul ng-repeat="tech in techs">' +
                    '           <li>{{tech.name}}</li>' +
                    '       </ul>' +
                    '</md-content>' +
                    '   <div class="md-actions">' +
                    '       <md-button ng-click="data.dialogOpen=false;hideDialog()">' +
                    '       Close' +
                    '       </md-button>' +
                    '   </div>' +
                    '</md-dialog>'
                }
                //md.alert()
                //    .parent(angular.element(document.querySelector('#popupContainer')))
                //    .clickOutsideToClose(true)
                //    .title('Made with')
                //    .content('AngularJS, AngularJS Loader, AngularJS Mocks, AngularJS Route, Html5 Boilerplate, ngMaterial')
                //    .ariaLabel('Alert Dialog Demo')
                //    .ok('Got it!')
                //    .targetEvent(ev)
            );
        };
}])
;
