app.controller('productController', function($scope, $http, $compile, $location, socket) {
	$scope.backupDataList = [];
	$scope.dataList = [];
	$scope.paginationDataList = [];
	$scope.productStatus ={
		0:'All Status',
		1:"Review",
		2:"Accepted",
		3:"Rejcted",
		4:"Bidding",
		5:"Sold",
	}
	// pagination
	$scope.currentPage=1;
	$scope.pageSize=5;
	
	$scope.getAllProducts = function() {	
		var req = getObjRequest(URL_ALL_PRODUCTS, 'GET');
		// manipulate request object
		$http(req).then(function(response){
			console.log('Caller $scope.getAllProducts: ',response);
			if(response.data['code']==1){
				constructFullProductsInfo(response.data.data);
				$scope.dataList = response.data.data;            // dataList to show to users 
				$scope.backupDataList = response.data.data;      // used for search
				$scope.paginationDataList = response.data.data;  // used for doing pagination
			}else{
				alert(response.data['description']);
			}		
		}, function(error){
			console.log(error);
		});

		// Test socket for admin connect
		var dataEmit = {
			header:{
				from:"admin",
				to:"haha"
			},
			body:{
				data:{
					code:"09",
					data:{},
					description:"haha"
				}
			}
		}
		socket.emit('sendMessage', dataEmit);
		socket.on('angularConnect', function(data) {
			debugger;
		});
		// debugg1er;
		socket.on('sendMessage1', function(data) {
			debugger;
		});

	}
	$scope.clickProductStatus = function(productStatus,statusText){
		if(productStatus == 0){ // get all status of product
			$scope.dataList = $scope.backupDataList;
			 $scope.paginationDataList = $scope.dataList;  // update pagination to include all data
		}else{
			var newDataList = [];
			// loop through all datas to find the related productStatus that user wants 
			angular.forEach($scope.backupDataList, function(product){
				if(product.status.status == statusText){
					newDataList.push(product);
				}
	        })

	        // assign search to dataList scope variable
	        $scope.dataList = newDataList;
	        $scope.paginationDataList = newDataList;  // update pagination pages when click dropdown list for product status
	    }
	    $('#dropdownProductStatus').html(statusText+CARET);
	}

	$scope.acceptProduct = function(product){
		debugger;
	}
	$scope.rejectProduct = function(product){
		debugger;
	}
	$scope.viewProduct = function(product){
		debugger;
	}

	// $scope.pagination = function(){
	// 	return function(data, start) {
	// 			debugger;
	// 	        return data.slice(start);
	// 	}
	// }

	/*  Pagination handler*/
	$scope.changePagePagination = function(toPageNumber){	
		console.log("*change to page: "+toPageNumber);
		$scope.currentPage = toPageNumber;
		var newStartIndex = ($scope.currentPage-1)*$scope.pageSize;  // because array start index from 0
		$scope.dataList = $scope.backupDataList.slice(newStartIndex);  // update dataList scope variable that is showing at client
	}
	$scope.changeToPreviousPage = function(){	
		//TODO : check if we already reach the first page
		debugger;
		if($scope.currentPage > 1){
			console.log("*change to previous page", $scope.currentPage-1);
				// change currentPage watcher
			$scope.currentPage = $scope.currentPage-1 ;
				// find new starting index for slicing from dataList
			var newStartIndex = ($scope.currentPage-1)*$scope.pageSize;  // because array start index from 0
			$scope.dataList = $scope.backupDataList.slice(newStartIndex);
		}else{
			alert('OOp! you are already at the beginning page! can not go to previous anymore!')
		}
		
	}
	$scope.changeToNextPage = function(){
		//TODO : check if we already reach the end page

		console.log("*change to next page: ", $scope.currentPage+1);
			// change currentPage watcher
		$scope.currentPage = $scope.currentPage+1 ;
			// find new starting index for slicing from dataList
		var newStartIndex = ($scope.currentPage-1)*$scope.pageSize;  // because array start index from 0
		$scope.dataList = $scope.backupDataList.slice(newStartIndex);
		
	}
	$scope.findTotalPages = function (totalDatas) {
	    var arr = [];
	    var range = totalDatas/$scope.pageSize; 
	    for (var i = 0; i < range; i++) {
	        arr.push(i);
	    }
	    return arr;
	}

	$scope.setPageSize = function(pageSize){
		$scope.pageSize = pageSize;
		$('#dropdownPageSize').html(pageSize+CARET);
	}

});

$(document).ready(function() {
	

	$('ul#my-navbar li a').click(function() {  // when click a in ul where id=my-navbar
	    $('ul#my-navbar li.active').removeClass('active');
	    $(this).closest('li').addClass('active');
	});

	// TODO : can not handle on select option change

	// $('select').on('change', function (e) {
	// 	debugger;
	//     var optionSelected = $("option:selected", this);
	//     var valueSelected = this.value;
	// });

	// $('select#productStatus').change(function(){
	// 	debugger;
	//     var selected = $(this).find("option:selected").val();
	//     alert(selected);
	// });

	// function selectProductStatus(ele) {
	// 	debugger;
	// }

	


});



