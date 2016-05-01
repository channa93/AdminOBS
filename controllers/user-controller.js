var detailUser = {};

app.controller('userController', function($scope, $http, $compile, $location) {
	$scope.detailUser = detailUser;
	$scope.getAllUsers = function() {	
		var req = getObjRequest(URL_ALL_USERS, 'GET');
		// manipulate request object
		$http(req).then(function(response){
			console.log('Caller $scope.getAllUsers: ',response);
			if(response.data['code']==1){
				$scope.dataList = response.data.data; 
			}else{
				alert(response.data['description']);
			}		
		}, function(error){
			console.log(error);
		});
	}
	$scope.showDetail = function(user){
		detailUser = user.data;  // this will be assigned to $scope.detailUser as well. See the above line under controller definition
		$location.path("/user/detail/"+user.data.userId);

	}
});

// $(document).ready(function(){
//     $("table#users tr").click(function(e){     //function_td
//     	debugger;
//       $(this).css("font-weight","bold");
//       e.stopPropagation();
//     })
// });

// function clickRow (row) {
// 	debugger;
// }