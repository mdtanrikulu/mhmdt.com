'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){



      var scope; //<--- define scope
      var ctrl;
      beforeEach(inject(function ($controller, $rootScope) {
          scope = $rootScope.$new(); //<--- initialize scope
          ctrl = $controller("View2Ctrl", {$scope: scope}); //<--- inject scope

      }));

      it("should have labels", function () {
          expect(scope.labels).toBeDefined();
      });

  });
});