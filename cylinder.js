function area(){
	const r = document.getElementById('num1').value;
	const h = document.getElementById('num2').value;
	const res = (2 * 3.14 * parseInt(r) * parseInt(h)) + (2 + 3.14 * parseInt(r) * parseInt(r))
	const vol = 3.14 * parseInt(r) * parseInt(r) * parseInt(h)
	document.getElementById('area').value = res;
	document.getElementById('volume').value = vol;
}