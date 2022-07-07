function sum(){
	console.log('Hello Mirketa Welcome');	
}

function add(){
	const firstnumber = document.getElementById('firstnumner').value;
	const secondnumber = document.getElementById('secondnumber').value;
	const sum = parseInt(firstnumber) + parseInt(secondnumber);
	document.getElementById('total').value = sum;
}
function sub(){
	const firstnumber = document.getElementById('firstnumner').value;
	const secondnumber = document.getElementById('secondnumber').value;
	const sub = parseInt(firstnumber) - parseInt(secondnumber);
	document.getElementById('total').value = sub;
}
function multiplication(){
	const firstnumber = document.getElementById('firstnumner').value;
	const secondnumber = document.getElementById('secondnumber').value;
	const multiplication = parseInt(firstnumber) * parseInt(secondnumber);
	document.getElementById('total').value = multiplication;
}
function division(){
	const firstnumber = document.getElementById('firstnumner').value;
	const secondnumber = document.getElementById('secondnumber').value;
	const division = parseInt(firstnumber) / parseInt(secondnumber);
	document.getElementById('total').value = division;
}