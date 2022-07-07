function area(){
	const s = document.getElementById('num1').value;
	const res = parseInt(s) * parseInt(s);
	const perimeter = 4 * parseInt(s);
	document.getElementById('area').value = res;
	document.getElementById('perimeter').value = perimeter;
}