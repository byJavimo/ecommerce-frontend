'use strict';

/**
 * @ngdoc service
 * @name ecommerceShopApp.products
 * @description
 * # products
 * Factory in the ecommerceShopApp.
 */
angular.module('ecommerceShopApp')
  .factory('productsService', [ '$http', function ($http) {

    var url = 'http://localhost:3001/api/';

    var productFactory = {
      getProducts: function() {
        var str = 'products';
        return $http.get(url + str).then(function (response) {
          return response.data.products;
        }, function (error) {
          console.log(error);
        });
      },
      addProduct: function (data) {
        var str = 'products';
        return $http.post(url + str, data).then(function (data) {
          return data;
        }, function (error) {
          console.log(error);
        });
      },
      deleteProduct: function (productId) {
        var str = 'products/';
        return $http.delete(url + str + productId).then(function (response) {
          return response.data.products;
        }, function (error) {
          console.log(error);
        });
      },
      updateProduct: function (data) {
        var str = 'products/';
        var productId = data._id;
        return $http.put(url + str + productId, data).then(function(response){
          return response.data.products;
        }, function (error) {
          console.log(error);
        })
      },

      getFeaturedProducts: function () {
        var str = 'products';
        return $http.get(url + str).then(function (response) {
          var i;
          var products = response.data.products;
          var featuredProducts = [];
          for( i in products) {
            if(products[i].isFeatured){
              featuredProducts.push(products[i]);
            }
          }
          console.log("Executing getFeaturedProducts in productsService -->", featuredProducts);
          return featuredProducts;
        }, function (error) {
          console.log(error);
        })
      }
    };
    // Public API here
    return productFactory
  }]);
