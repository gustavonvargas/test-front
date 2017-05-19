angular.module('GithubUsers').controller('GithubUsersCtrl', function($scope, $http){

	
	$scope.users = [];

	$http({
      method: 'GET',
      url: 'https://api.github.com/users/gustavonvargas'
   	}).then(function (data){
   		$scope.users = data;
   	},function (error){

   	});


});

