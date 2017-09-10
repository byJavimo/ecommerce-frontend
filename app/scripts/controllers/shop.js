'use strict';

/**
 * @ngdoc function
 * @name ecommerceShopApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the ecommerceShopApp
 */
angular.module('ecommerceShopApp')
  .controller('ShopCtrl', [ 'productsService',function (productsService) {

    var vm = this;

    vm.updateFormIsShown = false;

    vm.products = [];

    var getProducts = function() {
      productsService.getProducts().then(function (response) {
        console.log(response);
        vm.products = response;
      });
    };

    vm.addProduct = function (product) {
      productsService.addProduct(product).then(function (response) {
        console.log(response);
        return vm.products.push(response.data.product);
      });
      vm.product = {};

    };

    vm.deleteProduct = function (productId) {
      productsService.deleteProduct(productId).then(function (response) {
        console.log(response);
        getProducts();
      }, function (error) {
        console.log(error);
      })
    };

    vm.updateProduct = function (product) {
      productsService.updateProduct(product).then(function (response) {
        console.log(response);
        vm.updateFormIsShown = false;
      }, function (error) {
        console.log(error);
      })

    };

    vm.showUpdateForm = function () {
      vm.updateFormIsShown = true;
    };

    getProducts();
  }]);
