function area(){
	const r = document.getElementById('num1').value;
	const res = 3.14 * parseInt(r) * parseInt(r);
	const perimeter = 2 * 3.14 * parseInt(r);
	document.getElementById('area').value = res;
	document.getElementById('perimeter').value = perimeter;
}
