var detailUser = {};

app.controller('userController', function($scope, $http, $compile, $location) {
	$scope.detailUser = detailUser;
	$scope.backupDataList = [];
	$scope.userTypeStatus ={
		0:'All types',
		1:"Normal",
		2:"Silver",
		3:"Gold",
		4:"Platinium"
	}
	$scope.userStatus={
		77:'All status',
		0:'Block',
		1:'Active'
	}

	$scope.getAllUsers = function() {	
		var req = getObjRequest(URL_ALL_USERS, 'GET');
		// manipulate request object
		$http(req).then(function(response){
			console.log('Caller $scope.getAllUsers: ',response);
			if(response.data['code']==1){
				constructFullUsersInfo(response.data.data); // call to utils.js
				$scope.dataList = response.data.data;
				$scope.backupDataList = response.data.data; 
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

	$scope.clickUserType = function(userType,typeText){
		if(userType == 0){ // get all status of product
			$scope.dataList = $scope.backupDataList;
		}else{
			var newDataList = [];
			// loop through all datas to find the related productStatus that user wants 
			angular.forEach($scope.backupDataList, function(user){
				if(user.accountType == typeText){
					newDataList.push(user);
				}
	        })

	        // assign search to dataList scope variable
	        $scope.dataList = newDataList;
	    }
	    $('#dropdownUserType').html(typeText+CARET);
	}
	$scope.acceptUser = function(user) {
		debugger;
	}
	$scope.rejectUser = function(user) {
		debugger;
	}

	$scope.clickUserStatus = function(userStatus, statusText){
		if(userStatus == 77){ // get all status of product
			$scope.dataList = $scope.backupDataList;
		}else{
			var newDataList = [];
			// loop through all datas to find the related productStatus that user wants 
			angular.forEach($scope.backupDataList, function(user){
				if(user.status == statusText){
					newDataList.push(user);
				}
	        })

	        // assign search to dataList scope variable
	        $scope.dataList = newDataList;
	    }
		$('#dropdownUserStatus').html(statusText+CARET);
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