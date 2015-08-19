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
    $scope.open = function(size) {
      var modalInstance = $modal.open({
        templateUrl: 'views/modal-views/_cheatsheet-view.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });
    };
  });

angular.module('nobsjwApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.dismiss('cancel');
  };
});
