function add(){
	console.log("Hello Mirketa");
}

function hello(){
	console.log("It's a Good Morning");
}

function display(){
	var name = document.getElementById('firstname').value;
	console.log(name);
}
function clone(){
	var clone = document.getElementById('firstname').value;
	document.getElementById('lastname').value = clone;
}

function clearfun(){
	document.getElementById('firstname').value = "";
	document.getElementById('lastname').value = "";
}

function reversefun(){
	var a = document.getElementById('lastname').value;
	var b = document.getElementById('firstname').value;
	document.getElementById('firstname').value = a;
	document.getElementById('lastname').value = b;	
}

	