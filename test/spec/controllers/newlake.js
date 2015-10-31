'use strict';

describe('Controller: NewlakeCtrl', function () {

  // load the controller's module
  beforeEach(module('fishtrackerangularApp'));

  var NewlakeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewlakeCtrl = $controller('NewlakeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewlakeCtrl.awesomeThings.length).toBe(3);
  });
});
