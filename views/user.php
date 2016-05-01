<h1>User list page</h1>
<div ng-controller="userController" style="margin: inherit;" ng-init="getAllUsers()">
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
				<table class="table table-hover table-bordered table-responsive" id="users">
				    <thead>
				      <tr>
				        <th>ID</th>
				        <!-- <th>AccessKey</th> -->
				        <th>Dispaly Name</th>
				        <!-- <th>Profile Picture</th> -->
				        <th>Account Type</th>
				        <th>Created Account</th>
				        <th>Options</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr ng-repeat="data in dataList | filter:keyword" ng-click="showDetail(this)">  <!-- 2 ways binding  -->
				        
				        <td>  {{data.userId}}</td>
				        <!-- <td style="width=200px;overflow: 200px;">  {{data.accessKey}}</td> -->
				        <td>  {{data.displayName}}</td>
				        <!-- <td>  <img src="{{data.avatar}}" width="200" height="200"> </td> -->
				   
				        <td>    	
				        	<table>
				        		<tr>
				        			<td>{{data.price}}</td>
				        			<td ng-show="(data.accountType==1)" > Normal</td>
				        			<td ng-show="(data.accountType==2)" > Silver</td>
				        			<td ng-show="(data.accountType==3)" > Gold</td>
				        			<td ng-show="(data.accountType==4)" > Platinium</td>
				        		</tr>
				        	</table>
				        </td>

				        
				        <td> {{data.createdDate}}</td>
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
					


