// script.js
const app = angular.module('webStoreApp', []);

app.controller('StoreController', function($scope, $http) {
  $scope.billing = {};
  $scope.returnProduct = {};
  $scope.returnMessage = '';

  $scope.submitBilling = function() {
    $.ajax({
      url: '/api/billing',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify($scope.billing),
      success: function(response) {
        alert('Billing submitted successfully!');
      },
      error: function() {
        alert('Error submitting billing.');
      }
    });
  };

  $scope.submitReturn = function() {
    $.ajax({
      url: '/api/returns',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify($scope.returnProduct),
      success: function(response) {
        $scope.$apply(function() {
          $scope.returnMessage = 'Return processed: ' + response.message;
        });
      },
      error: function() {
        $scope.$apply(function() {
          $scope.returnMessage = 'Error processing return.';
        });
      }
    });
  };
});
