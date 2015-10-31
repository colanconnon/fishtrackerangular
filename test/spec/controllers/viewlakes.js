'use strict';

describe('Controller: ViewlakesCtrl', function () {

  // load the controller's module
  beforeEach(module('fishtrackerangularApp'));

  var ViewlakesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewlakesCtrl = $controller('ViewlakesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewlakesCtrl.awesomeThings.length).toBe(3);
  });
});
