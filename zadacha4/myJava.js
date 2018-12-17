// 1st task
function trap(){
	console.log((+document.getElementById('a').value + +document.getElementById('b').value)/2*+document.getElementById('h').value);
	alert((+document.getElementById('a').value + +document.getElementById('b').value)/2*+document.getElementById('h').value);
}
// 2 task
function prost(){
	var c, i, N,k,j;
	c=0;
	N = +document.getElementById('N').value;
	for (i = 2; i < 10001; i++){
		if (c < N) {
			k = 0;
			for (j =2; j<i+1; j++){
				if ((i % j) == 0) {
					k = k + 1;
				}
			}
			if (k==1){
				console.log(i);
				c = c + 1;
			}
		}
	}
	alert('Расчёт окончен');
}
//3 task
function go() {
	var tables = document.getElementById('tables');
	var m1 = [],m2 = [];
	for(let tr = 0; tr < 5; tr++) {
		for(let td = 0; td < 8; td++) {
			if(parseFloat(tables.rows[tr].cells[td].innerHTML) > 0){
				m1.push(parseFloat(tables.rows[tr].cells[td].innerHTML));
			}else if (parseFloat(tables.rows[tr].cells[td].innerHTML) < 0){
				m2.push(parseFloat(tables.rows[tr].cells[td].innerHTML));
			}
			
		}
	}
console.log(m1,m2);
alert("ГОТОВО!")
}
// 4 task
function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getArray(n){
	var a = [], min1 = parseFloat(znach.rows[0].cells[0].innerHTML), max1 = parseFloat(znach.rows[0].cells[1].innerHTML) ;	
	for (let i = 0; i < n**2; i++){
		a.push(getRandomInt(min1, max1));
	}
	return a;
}
function getResultArray(a) {
	return a.sort(function(a, b){return a - b});	
}
function start() {
	var znach = document.getElementById('znach');
	var m = [parseFloat(znach.rows[0].cells[0].innerHTML),parseFloat(znach.rows[0].cells[1].innerHTML),parseFloat(znach.rows[0].cells[2].innerHTML)];
	var min = m[0], max = m[1], n = m[2];
	// console.log(getResultArray(getArray(n)));
	var matrix = getResultArray(getArray(n));
	console.log(matrix);
	var newmas =[];
	for (var i = 0; i < n ; i++){
		newmas = [];
		if (n%2==0){
			if(i%2==0){
				for (var j = 0; j < n ;j++){			
					newmas.push(matrix[(n*(n-i-1))+j]);			
				}
			} else {
					for (var j = 0; j < n ;j++){			
						newmas.push(matrix[(n*(n-i))-1-j]);			
					}			
				}		
		}
		if(n%2==1){
			if(i%2==0){
				for (var j = 0; j < n ;j++){			
					newmas.push(matrix[(n*(n-i))-1-j]);			
				}
			} else {
					for (var j = 0; j < n ;j++){			
						newmas.push(matrix[(n*(n-i-1))+j]);			
					}			
				}				
		} 
		console.log(newmas);
	}
}	