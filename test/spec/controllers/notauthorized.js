'use strict';

describe('Controller: NotauthorizedCtrl', function () {

  // load the controller's module
  beforeEach(module('fishtrackerangularApp'));

  var NotauthorizedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotauthorizedCtrl = $controller('NotauthorizedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NotauthorizedCtrl.awesomeThings.length).toBe(3);
  });
});
