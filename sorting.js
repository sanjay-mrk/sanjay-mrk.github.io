function sort(){
	var first = document.getElementById('firstname').value;
	var second = document.getElementById('lastname').value;
	if(second.length > first.length){
		document.getElementById('firstname').value = second;
		document.getElementById('lastname').value = first;
	}
}

function ascsort(){
	var first = document.getElementById('firstname').value;
	var second = document.getElementById('lastname').value;
     if(first.length > second.length){
		document.getElementById('firstname').value = second;
		document.getElementById('lastname').value = first;
	}
}
