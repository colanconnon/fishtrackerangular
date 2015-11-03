'use strict';

describe('Controller: CatchdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('fishtrackerangularApp'));

  var CatchdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatchdetailsCtrl = $controller('CatchdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CatchdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
