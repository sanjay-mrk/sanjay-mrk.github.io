function calculator(){
	const first1 = document.getElementById('num1').value;
	const first2 = document.getElementById('num2').value;
	const first3 = document.getElementById('num3').value;
	const sum = parseInt(first1) * parseInt(first2) * parseInt(first3) / 100;
	document.getElementById('total').value = sum;
	if(first1 == '' || first2 == '' || first3 == ''){
		document.getElementById('total').value = 'Please Enter all the Value';
	}
}