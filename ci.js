function ci(){
	const p = document.getElementById('num1').value;
	const t = document.getElementById('num2').value;
	const r = document.getElementById('num3').value;
	const amt = parseInt(p) * (Math.pow((1 + parseInt(r) / 100), parseInt(t)));
	document.getElementById('comint').value = amt;
}