<h1>user detail</h1>
<div ng-controller="userController">
	
	<div class="row">
	  	<div class="col-md-4">
	      	<div>
	      		<img src="{{detailUser.avatar}}" alt="use profile picture" style="width:150px;height:150px">
	      	</div>
	      	<div style="float: right;">     		
		      	<p>Name: {{detailUser.displayName}}</p> 
		      	<p>Account Type: {{detailUser.displayName}}</p> 
		      	<p ng-show="(detailUser.accountType==1)" > Normal</p>
		      	<p ng-show="(detailUser.accountType==2)" > Silver</p>
		      	<p ng-show="(detailUser.accountType==3)" > Gold</p>
		      	<p ng-show="(detailUser.accountType==4)" > Platinium</p>
		      	<p>Created Account: {{detailUser.createdDate}}</p>
		      	<a href="#">Users' products</a> 
	      	</div>

	    </a>
	  </div>
	</div>

</div>