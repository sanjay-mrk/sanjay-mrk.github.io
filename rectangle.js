function area(){
	const len = document.getElementById('num1').value;
	const wid = document.getElementById('num2').value;
	const res = parseInt(len) * parseInt(wid);
	const req = 2 * (parseInt(len) + parseInt(wid));
	document.getElementById('area').value = res;
	document.getElementById('perimeter').value = req;
}