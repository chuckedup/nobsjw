'use strict';

/**
 * @ngdoc function
 * @name nobsjwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nobsjwApp
 */
angular.module('nobsjwApp')
  .controller('MainCtrl', function ($scope, $modal) {
    $scope.cheatsheet = function(size) {
      var modalInstance = $modal.open({
        templateUrl: 'views/modal-views/_cheatsheet-view.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });
    };

    $scope.exportMe = function(size){
      var modalInstance = $modal.open({
        templateUrl: 'views/modal-views/_export-view.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });
    };

  })
  .directive('borderClick', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        element.on('click', function(){
          $('#textfield-area').css('border', '1px solid black');
        });
      }
    };
  });

angular.module('nobsjwApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.dismiss('cancel');
  };
});
