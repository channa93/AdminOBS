var app = angular.module('myApp', ['ngRoute','angular-loading-bar','btford.socket-io', 'datatables']);
//var app = angular.module('myApp', ['ngRoute','angular-loading-bar','btford.socket-io']);
app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
   // $locationProvider.html5Mode(true);
   
   $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
   });
   $routeProvider.
   
   // route for the about page
    when('/', {
        templateUrl : 'views/product.php'
        //, controller  : 'clientController'
    }).
   when('/product', {
        templateUrl: 'views/product.php'
        //, controller: 'adminController'
   }).
   when('/user', {
        templateUrl: 'views/user.php'
        //, controller: 'adminController'
   }).
   when('/report', {
        templateUrl: 'views/report.php'
        //, controller: 'adminController'
   }).
   when('/notification', {
        templateUrl: 'views/notification.php'
        //, controller: 'adminController'
   }).
   when('/bidroom', {
        templateUrl: 'views/bidroom.php'
        //, controller: 'adminController'
   }).
   when('/user/detail/:id', {
        templateUrl: 'views/user_detail.php',
        //, controller: 'adminController'
   }).
 
   otherwise({
      redirectTo: '/'
   });

}]);

// app.filter('startFrom', function(){
//   return function(data,start){   // start variable is pass from startFrom filter , startFrom:start   while data is auto get from ng-repeat of that filter
//      return data.slice(start);
//   }
// });


app.factory('socket', function (socketFactory) {
  return socketFactory({
    prefix: '',  // by default prefix is socket:
    ioSocket: io.connect(IP_SOCKET)
  });
});


// // overide base url to place where this project is placed in
// $(document).ready(function(){
//     $("#base-url").attr("href", CLIENT_URL);
// });



// TODO
//- integrate datatables to angularjs




