'use strict';

/**
 * @ngdoc function
 * @name ecommerceShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecommerceShopApp
 */
angular.module('ecommerceShopApp')
  .controller('MainCtrl', [ 'productsService' ,function (productsService) {

    var vm = this;

    // Featured products section

    vm.featuredProducts = [];

    vm.numberOfBreakLines = [];

    var getFeaturedProducts = function (){
      productsService.getFeaturedProducts().then(function (response) {
        vm.featuredProducts = response;
      });
    };

    vm.getNumberOfBreakLines = function(productDescription) {
      var firstWhiteSpace = /^ /;
      var lastWhiteSpace = / $/;
      var severalWhiteSapace = /[ ]+/g;
      vm.numberOfWords = productDescription.split(" ").length;
      productDescription = productDescription.replace (severalWhiteSapace," ");
      productDescription = productDescription.replace (firstWhiteSpace,"");
      productDescription = productDescription.replace (lastWhiteSpace,"")

      return  vm.numberOfWords = productDescription.split(" ").length;

      if(vm.numberOfWords >=20) {
        vm.wordToConcatenate = vm.numberOfWords[19] + '...';
      }
      return vm.wordToConcatenate;

    };

    // User opinions section
    vm.opinions = [
      {
        user: "John Snow",
        userImage:"https://cde.laprensa.e3.pe/ima/0/0/1/3/9/139647.jpg",
        age: 33,
        position: "King in the north",
        description: "Being groggy is something that I know all too well. I love to have a good time, but have always paid for it the next day. After drinking Morning Recovery, I woke up the next morning with no haze. I was mentally sharp and was ready to take on the day."
      },
      {
        user: "Jamie Lannister",
        userImage: "http://www.tronodehierro.com/wp-content/uploads/2017/08/350x497xJaimeLannister.jpg.pagespeed.ic.bNHzAkn-RM.jpg",
        age: 41,
        position: "King guard",
        description: "Being groggy is something that I know all too well. I love to have a good time, but have always paid for it the next day. After drinking Morning Recovery, I woke up the next morning with no haze. I was mentally sharp and was ready to take on the day."
      },
      {
        user: "Arya Stark",
        userImage: "https://pbs.twimg.com/profile_images/894833370299084800/dXWuVSIb.jpg",
        age: 19,
        position: "No face warrior",
        description: ""
      }
    ];

    // On init:
    getFeaturedProducts();
  }]);
