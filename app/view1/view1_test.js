'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
        var scope; //<--- define scope
        var ctrl;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new(); //<--- initialize scope
            ctrl = $controller("View1Ctrl", {$scope: scope}); //<--- inject scope

        }));

        it("should have labels", function () {
            expect(scope.labels).toBeDefined();
        });

    }));
  });
});