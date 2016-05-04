	
	function http_request_ajax(obj, callbackSuccess , callbackError) {	
		$.ajax( {
			  url: obj.url,
			  method: obj.method,
			  data: obj.data,
			  headers: headers,
			  processData: false,
			  contentType: false,
			  success: callbackSuccess,
			  error: callbackError
		});	
	}

	// patter for later use with $http shorthand of angularjs 
	function getObjRequest(url, method, data) {
		return {
			url: url,
			method:method,
			data: data,
			headers: HEADERS,
			processData: false,
			contentType: false
		}	
	}

	function convert_to_js_object (data) {
		var obj = {};
	    $.each(data, function() {
	        if (obj[this.name] !== undefined) {
	            if (!obj[this.name].push) {
	                obj[this.name] = [obj[this.name]];
	            }
	            obj[this.name].push(this.value || '');
	        } else {
	            obj[this.name] = this.value || '';
	        }
	    });
	    return obj;
	}

	function constructFullUsersInfo (dataList) {
		angular.forEach(dataList, function(user){
			if(user.status == 0) user.status = "Block";
			else if(user.status == 1) user.status = "Active";

			if(user.accountType == 1) user.accountType = "Normal";
			else if(user.accountType == 2) user.accountType = "Silver";
			else if(user.accountType == 3) user.accountType = "Gold";
			else if(user.accountType == 4) user.accountType = "Platinium";
		});
	}

	function constructFullProductsInfo (dataList) {
		angular.forEach(dataList, function(product){
			if(product.status.status == 1) product.status.status = "Review";
			else if(product.status.status == 2) product.status.status = "Accepted";
			else if(product.status.status == 3) product.status.status = "Rejected";
			else if(product.status.status == 4) product.status.status = "Bidding";
			else if(product.status.status == 5) product.status.status = "Sold";		
		});
	}





