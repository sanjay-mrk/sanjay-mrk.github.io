function tri(){
	console.log("Hello");
	const a = document.getElementById('opp').value;
	const b = document.getElementById('hyp').value;
	const sin = parseInt(a) / parseInt(b);
	document.getElementById('sin').value = sin;
	const cosec = 1 / sin;
	document.getElementById('cosec').value = cosec;
}

function clearfun(){
	 document.getElementById('opp').value = '';
	 document.getElementById('hyp').value = '';
	 document.getElementById('sin').value = '';
	 document.getElementById('cosec').value = '';
}

function tri1(){
	const c = document.getElementById('adj').value;
	const d = document.getElementById('hyp1').value;
	const cos = parseInt(c) / parseInt(d);
	document.getElementById('cos').value = cos;
	const sec = 1 / cos;
	document.getElementById('sec').value = sec;
}

function clearfun1(){
	document.getElementById('adj').value = '';
	document.getElementById('hyp1').value = '';
	document.getElementById('cos').value = '';
	document.getElementById('sec').value = '';
}

function tri2(){
	const e = document.getElementById('opp1').value;
	const f = document.getElementById('adj1').value;
	const tan = parseInt(e) / parseInt(f);
	document.getElementById('tan').value = tan;
	const cot = 1 / tan;
	document.getElementById('cot').value = cot;
}

function clearfun2(){
	document.getElementById('opp1').value = '';
	document.getElementById('adj1').value = '';
	document.getElementById('tan').value = '';
	document.getElementById('cot').value = '';
}
