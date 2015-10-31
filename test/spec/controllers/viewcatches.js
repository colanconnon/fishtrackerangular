'use strict';

describe('Controller: ViewcatchesCtrl', function () {

  // load the controller's module
  beforeEach(module('fishtrackerangularApp'));

  var ViewcatchesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewcatchesCtrl = $controller('ViewcatchesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewcatchesCtrl.awesomeThings.length).toBe(3);
  });
});
