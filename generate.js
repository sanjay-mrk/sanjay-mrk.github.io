function add(){
	var str = '<table>';
	for(i=1 ;i<=5;i++){
	str = str + '<tr><td> Apple '+ i +' </td></tr>'
}
	str = str + '</table>';
	document.getElementById('n').innerHTML = str;
	console.log('Hello');
}

function num(){
	var num = '<table class = "table table-hover"> <tbody> <thead class = "bg-warning">';
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	for(i = parseInt(num1); i <= parseInt(num2) ; i++){
	num = num + '<tr><td> '+ (i*1) +' </td><td>'+ (i*2) +' </td><td> '+ (i*3) +' </td><td> '+ (i*4) +' </td><td> '+ (i*5) +' </td><td> '+ (i*6) +' </td><td> '+ (i*7) +' </td><td> '+ (i*8) +' </td><td> '+ (i*9) +' </td><td> '+ (i*10) +' </td></tr>';
	}
	num = num + '</thead> </tbody> </table>';
	document.getElementById('n').innerHTML = num;
}