<!DOCTYPE html>
<html>
	<head>
		<title>Admin OBS</title>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/client-style.css">	
		<link rel="stylesheet" type="text/css" href="css/jquery.json-view.min.css">
		<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/mystyle.css">
		<link rel="stylesheet" type="text/css" href="css/loading-bar.css">
		<link rel="stylesheet" type="text/css" href="css/angular-datatables.css">
		<!-- add meta tag to proper rendering in small device -->
		<META NAME="viewport" CONTENT="width=device-width, height=device-height, initial-scale=1, user-scalable=yes"/>
		<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">	 -->
		<!-- <link rel="stylesheet" type="text/css" href="css/jquery.json-view.css">	 -->		
		<base id="base-url" href="/AdminOBS/"</base> <!-- use base tag for html5mode to remove # form url  -->
	</head>
	<body ng-app="myApp" >
		<div class="container" id="wrap">
			<div id="header" class="row">
				<?php include 'views/header.php'; ?>
			</div>
			<!-- <a href="adminPage">Admin</a><br>
			<a href="product">Product</a><br>
			<a href="user">user</a><br>
			<a href="report">report</a><br>
			<a href="notification">notification</a><br>
			<a href="bidroom">Bidroom</a><br> -->
			<div ng-view id="main"></div>
			
			<div id="footer" class="row" style="height:400dp;">
				<?php include 'views/footer.php'; ?>
			</div>
		</div>

		<script  src="constants/global.js"></script>
		<script  src="js/jquery-1.9.1.min.js"></script>
		<script  src="js/bootstrap.min.js"></script>
		<script  src="js/angular.min.js"></script>
		<script  src="js/angular-route.min.js"></script>
		<script  src="js/jquery.json-view.min.js"></script>
		<!-- <script  src="js/my-script.js"></script> -->
		<!-- <script  src="js/utils.js"></script> 
		<script  src="js/myapp.js"></script> -->

		<script  type="text/javascript" src="js/jquery.dataTables.min.js"></script>  <!-- angular datatables require jquery dataTables --> 
		<script  type="text/javascript" src="js/angular-datatables.js"></script> 
		<script  type="text/javascript" src="js/socket-io-client.js"></script> 
		<script  type="text/javascript" src="js/loading-bar.js"></script> 
		<script  type="text/javascript" src="js/socket-io-module.js"></script> 
		<script  type="text/javascript" src="js/app.js"></script> 
		<script  type="text/javascript" src="controllers/utils.js"></script> 
		<script  type="text/javascript" src="controllers/product-controller.js"></script> 
		<script  type="text/javascript" src="controllers/user-controller.js"></script> 
		 
		 
	</body>
</html>


		
	

