<h1>home page/ list products</h1>
<div ng-controller="productController" style="margin: inherit;" ng-init="getAllProducts()">
	<div class="row">
		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
	        <div class="input-group">
	            <input type="text" class="form-control" placeholder="Search ..." ng-model="keyword">
	            <div class="input-group-btn">
	                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
	            </div>
	        </div>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        	<!-- <div class="btn-group" style="width:75%; ">
        	  	<button type="button" class="btn btn-danger  dropdown-toggle text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownProductStatus">
        	    All status <span class="caret"></span>
        	  	</button>
        	  	<ul class="dropdown-menu" >
	        	    <li><a href="#" ng-click="clickProductStatus(0,'All status')">All status</a></li>
	        	    <li><a href="#" ng-click="clickProductStatus(1, 'Review')">Review</a></li>
	        	    <li><a href="#" ng-click="clickProductStatus(2, 'Accepted')">Accepted</a></li>
	        	    <li><a href="#" ng-click="clickProductStatus(3, 'Rejected')">Rejected</a></li>
	        	    <li><a href="#" ng-click="clickProductStatus(4, 'Available/Bidding')">Available/Bidding</a></li>
	        	    <li><a href="#" ng-click="clickProductStatus(5, 'Sold')">Sold</a></li>
        	  	</ul>
        	</div> --> 

        	<div class="btn-group" style="width:75%; ">
        	  	<button type="button" class="btn btn-primary  dropdown-toggle text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownProductStatus">
        	    All status <span class="caret"></span>
        	  	</button>
        	  	<ul class="dropdown-menu" >
        	    	<li ng-repeat="(key, value) in productStatus">	 <!-- (key,value) = (number,text) -->
        	    		<a href="#"  ng-click="clickProductStatus(key,value)">{{value}}</a>	    		      	    	
        	    	</li>     	    
        	  	</ul>
        	</div> 
	        
		</div>
	</div>
	<div class="row" >
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<!-- <div class="table-responsive" > -->
				<table class="table table-hover table-bordered table-responsive">
				    <thead>
				      <tr>
				        <th>ID</th>
				        <!-- <th>Code</th> -->
				        <th>Name</th>
				        <th>Price</th>
				        <th>Description</th>
				        <th>Status</th>
				        <th>Image</th>
				        <th>Options</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr ng-repeat="data in dataList | filter:keyword">  <!-- 2 ways binding  -->
				        
				        <td>  {{data.productId}}</td>
				        <!-- <td>  {{data.productCode}}</td> -->
				        <td>  {{data.name}}</td>
				   
				        <td>    	
				        	<table>
				        		<tr>
				        			<td>{{data.price}}</td>
				        			<td ng-show="(data.currencyType==1)" > $</td>
				        			<td ng-show="(data.currencyType==2)" > Real</td>
				        			<!-- <td><span ng-show="(data.currencyType==1)" style="color: red;">$</span>{{param.name}}</td> -->
				        		</tr>
				        	</table>
				        </td>

				        <td>
				        	{{data.description}}
				        </td>
				        <td>
				        	
				        	<!-- <p ng-show="(data.status.status==1)">Review</p>
				        	<p ng-show="(data.status.status==2)">Accepted</p>
				        	<p ng-show="(data.status.status==3)">Rejected</p>
				        	<p ng-show="(data.status.status==4)">Available/Bidding</p>
				        	<p ng-show="(data.status.status==5)">Sold</p> -->
				        	<p>{{data.status.status}}</p>
				        	<!-- <p>Date Approved: {{data.status.date}}</p> -->
				        </td>
				        <td>
				        	<!-- <img src="data.imageGallery"> -->
				        	pic
				        </td>
				        <td style="vertical-align: middle;">
				        	<button type="button" class="btn btn-primary btn-xs" aria-label="Left Align" ng-click="acceptProduct(data)">
				        	  <span class="glyphicon  glyphicon-ok" aria-hidden="true"></span> Accept
				        	</button>
				        	<button type="button" class="btn btn-danger btn-xs" aria-label="Left Align" ng-click="rejectProduct(data)"> <!-- ng-click="confirmRemoveFunction(data.id, data.controller)" -->
				        	  <span class="glyphicon  glyphicon-remove" aria-hidden="true"></span> Reject
				        	</button>
				        	<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align" ng-click="viewProduct(data)"> <!-- ng-click="confirmRemoveFunction(data.id, data.controller)" -->
				        	  <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> View
				        	</button>
				        </td>        
				      </tr>

				    </tbody>
				  </table>
		</div>	
	</div> <!-- end of row -->	
</div>
					


