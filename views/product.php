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
	</div>
	<div class="row" >
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<!-- <div class="table-responsive" > -->
				<table class="table table-hover table-bordered table-responsive">
				    <thead>
				      <tr>
				        <th>ID</th>
				        <th>Code</th>
				        <th>Name</th>
				        <th>Price</th>
				        <th>Description</th>
				        <th>Image</th>
				        <th>Options</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr ng-repeat="data in dataList | filter:keyword">  <!-- 2 ways binding  -->
				        
				        <td>  {{data.productId}}</td>
				        <td>  {{data.productCode}}</td>
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
				        	<!-- <img src="data.imageGallery"> -->
				        	pic
				        </td>
				        <td style="vertical-align: middle;">
				        	<button type="button" class="btn btn-primary btn-xs" aria-label="Left Align" ng-click="editFunction(data)">
				        	  <span class="glyphicon  glyphicon-ok" aria-hidden="true"></span> Accept
				        	</button>
				        	<button type="button" class="btn btn-danger btn-xs" aria-label="Left Align" ng-click="clickDelete(data)"> <!-- ng-click="confirmRemoveFunction(data.id, data.controller)" -->
				        	  <span class="glyphicon  glyphicon-remove" aria-hidden="true"></span> Reject
				        	</button>
				        </td>        
				      </tr>

				    </tbody>
				  </table>
		</div>	
	</div> <!-- end of row -->	
</div>
					


