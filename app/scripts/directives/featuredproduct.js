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
            '<div class="col-3"></div>' +
            '<img class="col-3" src="{{featuredProduct.picture}}">' +
            '<div class="col-3">' +
              '<h4>{{featuredProduct.name}}</h4>' +
              '<p> {{featuredProduct.price | currency:"€":2}}</p>' +
              '<p ng-class="{ellipsis: getNumberOfBreakLines(featuredProduct.description) > 20}"> {{featuredProduct.description}} </p>' +
              '<a href="/"> Learn more </a>' +
            '</div>' +
            '<div class="col-3"></div>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      scope: {
        featuredProduct: '=product'
      },
      link: function (scope) {
        var numberOfWords;
        scope.getNumberOfBreakLines = function(productDescription) {
          var firstWhiteSpace = /^ /;
          var lastWhiteSpace = / $/;
          var severalWhiteSapace = /[ ]+/g;
          productDescription = productDescription.replace (severalWhiteSapace," ");
          productDescription = productDescription.replace (firstWhiteSpace,"");
          productDescription = productDescription.replace (lastWhiteSpace,"")

          if(numberOfWords >=20) {
            productDescription = productDescription.replace (numberOfWords[20], numberOfWords[19] + '...');
          };

          return numberOfWords = productDescription.split(" ").length;



        };
      }
    };
  });
