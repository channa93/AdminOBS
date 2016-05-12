//const IP_SERVER = "http://192.168.1.244"; //local
//const IP_SERVER = "http://192.168.1.146"; // server
const IP_SERVER = window.location.origin;  // getting ip of server 
const CARET = ' <span class="caret"></span>';
const URL_WEBSERVICE = IP_SERVER+"/obs/api/"; // url end point will be used later to retrieve data from web service just need controller and funtion name from select option
const URL_ALL_PRODUCTS = URL_WEBSERVICE+"product";
const URL_ALL_USERS = URL_WEBSERVICE+"profile";


const HEADERS ={
	'Authorization': 'Basic '+btoa('admin:1234') //js use btoa('user:password')  or php use = base64encode() YWRtaW46MTIzNA==
};

// url admin 
const URL_ADMIN = IP_SERVER+"/obs/admin/testFunction/Admin/login";
const ACCESSKEY = "NTcxZGRmYjMyNTE4MGViYzBkMDAwMDI5MjAxNi0wNC0yNSAxNjowNDoyM09ubGluZV9CaWRkaW5nX1N5c3RlbQ==";
// const IP_SOCKET = "http://188.166.183.25:3000/socket.io/socket.io.js";
const IP_SOCKET = "http://localhost:3000";
// const IP_SOCKET = "test";
