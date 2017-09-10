'use strict';

describe('Directive: featuredProduct', function () {

  // load the directive's module
  beforeEach(module('ecommerceShopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<featured-product></featured-product>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the featuredProduct directive');
  }));
});
