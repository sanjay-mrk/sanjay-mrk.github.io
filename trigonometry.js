function tri(){
	console.log("Hello");
	const a = document.getElementById('opp').value;
	const b = document.getElementById('hyp').value;
	const sin = parseInt(a) / parseInt(b);
	document.getElementById('sin').value = sin;
	const cosec = 1 / sin;
	document.getElementById('cosec').value = cosec;
}

function tri1(){
	const c = document.getElementById('adj').value;
	const d = document.getElementById('hyp1').value;
	const cos = parseInt(c) / parseInt(d);
	document.getElementById('cos').value = cos;
	const sec = 1 / cos;
	document.getElementById('sec').value = sec;
}

function tri2(){
	const e = document.getElementById('opp1').value;
	const f = document.getElementById('adj1').value;
	const tan = parseInt(e) / parseInt(f);
	document.getElementById('tan').value = tan;
	const cot = 1 / tan;
	document.getElementById('cot').value = cot;
}