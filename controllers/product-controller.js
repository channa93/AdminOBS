app.controller('productController', function($scope, $http, $compile, $location, socket) {
	$scope.backupDataList = [];
	$scope.productStatus ={
		0:'All Status',
		1:"Review",
		2:"Accepted",
		3:"Rejcted",
		4:"Bidding",
		5:"Sold",
	}
	
	$scope.getAllProducts = function() {	
		var req = getObjRequest(URL_ALL_PRODUCTS, 'GET');
		// manipulate request object
		$http(req).then(function(response){
			console.log('Caller $scope.getAllProducts: ',response);
			if(response.data['code']==1){
				constructFullProductsInfo(response.data.data);
				$scope.dataList = response.data.data;
				$scope.backupDataList = response.data.data
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
		debugger;
		socket.on('sendMessage1', function(data) {
			debugger;
		});

	}
	$scope.clickProductStatus = function(productStatus,statusText){
		if(productStatus == 0){ // get all status of product
			$scope.dataList = $scope.backupDataList;
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


// 	$scope.getListControllers = function() {
// 		var req = getObjRequest(URL_CTRLS, 'GET', {});

// 		// manipulate request object
// 		$http(req).then(function(response){
// 			console.log('Caller $scope.getListControllers: ',response);
// 			if(response.data['code']==1){
// 				$scope.listControllers = response.data.data; 
// 			}else{
// 				alert(response.data['description']);
// 			}
			
// 		}, function(error){
// 			console.log(error);
// 		});
// 	}

// 	$scope.selectControler = function(ctrlName) {
// 		$scope.ctrl = ctrlName;
// 		$scope.getListFunctions(ctrlName);

// 	}

// 	// handle form submit for add new function in admin page *******
// 	$('#form-add-function').submit(function(e) {

// 		// get data from form and prepare it for object request to server to get data
// 		var form_data = $(this).serializeArray();
// 		var obj = convert_to_js_object(form_data);
// 			// check if params is string then convert to array so that later function,_prepareDataAdminEditFunc, work properly
// 		if(typeof obj.params === 'string' ){ 
// 			var tmpArray = [];
// 			tmpArray[0] = obj.params;
// 			obj.params = tmpArray;
// 		}
// 		var data = _prepareDataAdminAddNewFunc(obj);
// 		console.log(data);debugger;

// 		var req = getObjRequest(URL_ADD_FUNC, 'POST', data);
		
// 		$http(req).then(function(response){
// 			console.log('Response after submit form:' +response);
// 			$scope.getListControllers();
// 			$scope.dataList = response.data.data;
// 			$('#addFormModal').modal('toggle');		 // hide modal
// 			$('#form-add-function')[0].reset();	     // reset form
// 		},function(error){
// 			console.log(error);
// 		});
// 	});

// 	function _prepareDataAdminAddNewFunc(obj) {
// 		var dataPost ={
// 			controller: obj.controller,
// 			action: obj.action,
// 			description: obj.description,
// 			params: ''  // need to find
// 		};
// 		var nameParam = obj.params;
// 		var statusParam = obj.status;
// 		  //Find param type by remove property from obj except param type
// 		delete obj['controller'];
// 		delete obj['action'];
// 		delete obj['description'];
// 		delete obj['params'];
// 		delete obj['status'];
// 		var typeParam = obj;

// 		// loop each key in typeParam object and create new params ,array of object, name and type as key 
// 		var i=0;
// 		var params=[];
// 		for (var property in typeParam) {
// 		    if (typeParam.hasOwnProperty(property)) {
// 		        // console.log(nameParam[i++], typeParam[property] );
// 		        params.push(
// 		        	{
// 		        		name: nameParam[i],
// 		        		type: typeParam[property],
// 		        		status: statusParam[i]
// 		        	}
// 		        );
// 		        i++;
// 		    }
// 		}
// 		dataPost['params'] = params;
// 		return dataPost;
// 	}
// 	function _prepareDataAdminEditFunc(obj) {
// 		var dataPost ={
// 			controller: obj.controller,
// 			action: obj.action,
// 			description: obj.description,
// 			id: obj.id,  // don't like AddNewFunction when edit we need id
// 			params: ''  // need to find
// 		};
// 		var nameParam = obj.params;
// 		var statusParam = obj.status;

		
// 		  //Find param type by remove property from obj except param type
// 		delete obj['controller'];
// 		delete obj['action'];
// 		delete obj['description'];
// 		delete obj['params'];
// 		delete obj['id'];
// 		delete obj['status'];
// 		var typeParam = obj;

// 		// loop each key in typeParam object and create new params ,array of object, name and type as key 
// 		var i=0;
// 		var params=[];
// 		for (var property in typeParam) {
// 		    if (typeParam.hasOwnProperty(property)) {
// 		        // console.log(nameParam[i++], typeParam[property] );
// 		        params.push(
// 		        	{
// 		        		name: nameParam[i],
// 		        		type: typeParam[property],
// 		        		status: statusParam[i]
// 		        	}
// 		        );
// 		        i++;
// 		    }
// 		}
// 		dataPost['params'] = params;
// 		return dataPost;
// 	}


// 	$scope.addParam = function(fromFunction) {	// param name is to identify who call this function
// 		console.log('Add param from: '+fromFunction);
// 		nthParam+=1; // increment number of param. later use when add new row with radio type spcify name
// 		var param_input = '<tr class="param-tbl-row">'+
// 		        	         '<td>'+     	          
// 		        	         	'<input type="text" class="form-control" name="params" placeholder="parameter name ...">'+
// 		        	         '</td> '+   
// 		        	        '<td>'+       
// 		        	        	'<label class="radio-inline"><input type="radio" checked="checked" value="text" name="type-param'+nthParam+'">text</label>' +
// 		        	        	'<label class="radio-inline"><input type="radio" value="file" name="type-param'+nthParam+'">file</label>' + 	
// 		        	        '</td>'+
// 		        	        '<td>'+
// 		        	        	'<select name="status" class="btn btn-default">'+
// 		        	        		'<option value="0">optional</option>'+
// 		        	        		'<option value="1">required</option>'+
// 		        	        	'</select>'+
// 		        	        '</td>'+
// 		        	        '<td>'+
// 		        	        	'<button type="button" class="btn btn-danger btn-remove-param" onclick="removeParam(this)" aria-label="Left Align" ><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'+
// 		        	        '</td>' +     				       
// 		        	      '</tr>';

// 		// test who call this function
// 		if(fromFunction == 'inEditFunction'){
// 			$(param_input).appendTo('#param-tbl-body-edit-function');//$('#param-tbl-body').append(param_input);
// 		}else if(fromFunction == 'inAddFunction'){
// 			$(param_input).appendTo('#param-tbl-body-add-function');//$('#param-tbl-body').append(param_input);
// 		}
// 		console.log(nthParam,param_input);
// 	}

	
// 	$scope.clickDelete = function(data){
// 		$scope.data_delete = data; // store data to scope for later use
// 		$('#confirmDeleteModal').modal({backdrop: "static"});
// 	}

// 	$scope.removeFunction = function() {
// 		// get id and controller from scope variable saved from $scope.clickDelete
// 		id = $scope.data_delete.id;  
// 		ctrlName = $scope.data_delete.controller;

// 		var req = getObjRequest(URL_DELETE_FUNC, 'POST', {id:id});
// 		$http(req).then(function(response){
// 			// refresh List Functions;
// 			$scope.getListFunctions(ctrlName);

// 		},function(error){
// 			console.log(error);
// 		});

// 	}
// 	// $scope.removeFunction = function(id, ctrlName) {
// 	// 	var req = getObjRequest(URL_DELETE_FUNC, 'POST', {id:id});
// 	// 	$http(req).then(function(response){
// 	// 		// refresh List Functions;
// 	// 		$scope.getListFunctions(ctrlName);

// 	// 	},function(error){
// 	// 		console.log(error);
// 	// 	});

// 	// }

// 	$scope.editFunction = function(data) {
// 		$scope.dataEdit = data;
// 		$('#editFormModal').modal({backdrop: "static"});
// 	}

// 	$('#form-edit-function').submit(function(e) {
// 		// alert('submit edit function');
// 		var form_data = $(this).serializeArray();
// 		var obj = convert_to_js_object(form_data);
// 		console.log(obj);debugger;
// 			// check if params is string then convert to array so that later function,_prepareDataAdminEditFunc, work properly
// 		if(typeof obj.params === 'string' ){ 
// 			var tmpArray = [];
// 			tmpArray[0] = obj.params;
// 			obj.params = tmpArray;
// 		}

// 		var data = _prepareDataAdminEditFunc(obj);
// 		var req = getObjRequest(URL_EDIT_FUNC, 'POST', data);
// 		console.log('Data for request edit function: ',req);debugger;
// 		$http(req).then(function(response){
// 			console.log('Response after submit form edit:' ,response);
// 			// get list of controllers , refresh it
// 			$scope.getListControllers();
// 			// hide modal form
// 			$('#editFormModal').modal('toggle');	// hide/show modal
// 			// update scope variable to refresh UI data in ng-repeat
// 			$scope.dataList = response.data.data;
// 			$('#form-edit-function')[0].reset();	
// 		},function(error){
// 			console.log(error);
// 		});
// 	});

// 	$('#btn-logout').click(function(){
// 		console.log('click button logout');
// 		// $location.path('/abc');
// 		window.location.href = CLIENT_URL; // this will refresh page
// 		// $location.path(CLIENT_URL); this will not refresh page but it does not work. DOn't know why
// 	});

// 	// show default controller and list of functions
// 	$scope.getListFunctions('Profile');
// 	$scope.getListControllers();		
	
// });


// /*****  js functoin to remove row of param when onlick event is fired.  onclick="removeParam(this)"  *****/ 
// // if we put it inside angular app module, it does not work cus para element is dynamic 
// //unless we frequently compile it every time we add/remove param so that angular knows what it is
// function removeParam (element) {
// 	$(element).closest('tr').remove ();
// }
