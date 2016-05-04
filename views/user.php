<h1>User list page</h1>
<div ng-controller="userController" style="margin: inherit;" ng-init="getAllUsers()">
	<div class="row">
		<!-- search box -->
		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
	        <div class="input-group">
	            <input type="text" class="form-control" placeholder="Search ..." ng-model="keyword">
	            <div class="input-group-btn">
	                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
	            </div>
	        </div>
		</div>

		<!-- select list for account type search -->
		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        	<!-- <div class="btn-group" style="width:75%; ">
        	  	<button type="button" class="btn btn-danger  dropdown-toggle text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownUserType">
        	    All types <span class="caret"></span>
        	  	</button>
        	  	<ul class="dropdown-menu" >
	        	    <li><a href="#" ng-click="clickUserType(0,'All types')">All types</a></li>
	        	    <li><a href="#" ng-click="clickUserType(1, 'Normal')">Normal</a></li>
	        	    <li><a href="#" ng-click="clickUserType(2, 'Silver')">Silver</a></li>
	        	    <li><a href="#" ng-click="clickUserType(3, 'Gold')">Gold</a></li>
	        	    <li><a href="#" ng-click="clickUserType(4, 'Platinium')">Platinium</a></li> 
        	  	</ul>
        	</div> -->
        	<div class="btn-group" style="width:75%; ">
        	  	<button type="button" class="btn btn-primary  dropdown-toggle text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownUserType">
        	    All types <span class="caret"></span>
        	  	</button>
        	  	<ul class="dropdown-menu" >
        	    	<li ng-repeat="(key, value) in userTypeStatus">	 <!-- (key,value) = (number,text) -->
        	    		<a href="#"  ng-click="clickUserType(key,value)">{{value}}</a>	    		      	    	
        	    	</li>     	    
        	  	</ul>
        	</div> 
       	</div>

       	<!-- select list for user status serarch -->
       	<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        	<div class="btn-group" style="width:75%; ">
        	  	<button type="button" class="btn btn-warning  dropdown-toggle text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownUserStatus">
        	    All status user <span class="caret"></span>
        	  	</button>
        	  	<ul class="dropdown-menu" >
	        	    <!-- <li><a href="#" ng-click="clickUserStatus(0, 'Block')">Block</a></li>
	        	    <li><a href="#" ng-click="clickUserStatus(1,'Active')">Active</a></li> -->
	        	    <li ng-repeat="(key, value) in userStatus">
	        	    	<a href="#" ng-click="clickUserStatus(key, value)">{{value}}</a>
	        	    </li>
        	  	</ul>
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
				        <th>Status</th>
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
				        			<td ng-show="(data.accountType==1)" > Normal</td>
				        			<td ng-show="(data.accountType==2)" > Silver</td>
				        			<td ng-show="(data.accountType==3)" > Gold</td>
				        			<td ng-show="(data.accountType==4)" > Platinium</td>
				        		</tr>
				        	</table>
				        </td>

				        <td>
				        	<span ng-show="data.status==1">Active</span>
				        	<span ng-show="data.status==0">Block</span>
				        </td>
				        <td> {{data.createdDate}}</td>
				        <td style="vertical-align: middle;">
				        	<button type="button" class="btn btn-primary btn-xs" aria-label="Left Align" ng-click="acceptUser(data)">
				        	  <span class="glyphicon  glyphicon-ok" aria-hidden="true"></span> Accept
				        	</button>
				        	<button type="button" class="btn btn-danger btn-xs" aria-label="Left Align" ng-click="rejectUser(data)"> <!-- ng-click="confirmRemoveFunction(data.id, data.controller)" -->
				        	  <span class="glyphicon  glyphicon-remove" aria-hidden="true"></span> Reject
				        	</button>
				        </td>        
				      </tr>

				    </tbody>
				  </table>
		</div>	
	</div> <!-- end of row -->	
</div>
					


