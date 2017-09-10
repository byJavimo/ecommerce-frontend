'use strict';

/**
 * @ngdoc directive
 * @name ecommerceShopApp.directive:featuredProduct
 * @description
 * # featuredProduct
 */
angular.module('ecommerceShopApp')
  .directive('featuredProduct', function () {
    return {
      template:
        '<div class="row align-items-center justify-content-center">' +
          '<div class="col featured-products">' +
            '<div class="col-2"></div>' +
            '<img class="col-3" src="{{featuredProduct.picture}}">' +
            '<div class="col-5">' +
              '<h4>{{featuredProduct.name}}</h4>' +
              '<p> {{featuredProduct.price}}</p>' +
              '<a href="/"> Learn more </a>' +
            '</div>' +
            '<div class="col-2"></div>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      scope: {
        featuredProduct: '=product'
      }
    };
  });
