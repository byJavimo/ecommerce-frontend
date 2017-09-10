'use strict';

describe('Directive: userOpinion', function () {

  // load the directive's module
  beforeEach(module('ecommerceShopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-opinion></user-opinion>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userOpinion directive');
  }));
});
