var BacoB = angular.module('BacoB',[]);
	BacoB.controller("Mensaje", function($scope){});

	BacoB.controller("Operaciones", function($scope){
		$scope.numero1 = 10
		$scope.numero2 = 1
		$scope.suma = $scope.numero1 + $scope.numero2 
	});