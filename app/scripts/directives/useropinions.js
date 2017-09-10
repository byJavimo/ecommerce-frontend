'use strict';

/**
 * @ngdoc directive
 * @name ecommerceShopApp.directive:userOpinion
 * @description
 * # userOpinion
 */
angular.module('ecommerceShopApp')
  .directive('userOpinion', function () {
    return {
      template: '<img class="rounded-circle" src="{{opinion.userImage}}" alt="Card image cap">' +
      '<div class="card-body">' +
        '<h4 class="card-title"> {{opinion.user}},<em>{{opinion.age}}</em></h4>' +
        '<p class="card-text">{{opinion.description}}</p>' +
        '<a href="#" class="btn btn-primary">Go somewhere</a>' +
      '</div>'
      ,
      restrict: 'E',
      scope: {
        opinion: '=opinion'
      }
    };
  });
