'use strict';

describe('Controller: NewfishcatchCtrl', function () {

  // load the controller's module
  beforeEach(module('fishtrackerangularApp'));

  var NewfishcatchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewfishcatchCtrl = $controller('NewfishcatchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewfishcatchCtrl.awesomeThings.length).toBe(3);
  });
});
