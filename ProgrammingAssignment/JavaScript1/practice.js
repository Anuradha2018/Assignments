/*Q.Write a loop which prompts for a number greater than 100. 
If the visitor enters another number – ask him to input again. 
The loop must ask for a number until either the visitor enters a number greater than 100 
or cancels the input/enters an empty line. */

var n = prompt('Enter a number:'); 
if( n < 100){ 
n = prompt('Enter anothernumber:'); 
alert(n);
} else { 
alert(n);
}

let num ;
do{
num = prompt('Enter a number:');
num = parseInt(num);
console.log(num);
alert(num);
}while(num < 100)


/*Q.Output Prime Numbers */

let num = prompt('Enter a number'); 
if(num == 2){ 
alert(num + 'is prime');
} else if(num > 2){ 
	for(let i = 2; i < num; i++){ 
		if(num%i !== 0){ 
			alert(num + 'is prime');
			} 
		else{ 
			alert(num + 'is not prime');
			}
	} 
	}
else{ 
alert(num + 'is not prime');
}


/*Calculator using switch case*/


function addition(a,b){
return a+b;
}
function substraction(a,b){
return a-b;
}
function multiplication(a,b){
return a*b;
}
function division(a,b){
return a/b;
} 
function power(a,b){
return Math.pow(a,b);
}
let operation = parseInt(prompt('Enter an operation'));
switch(operation){
case 1:
let a = prompt('enter first number');
a = parseInt(a);
let b = prompt('enter second number');
b = parseInt(b);
addition(a,b);
alert(addition(a,b));
break;
case 2:
let c = prompt('enter first number');
c = parseInt(c);
let d = prompt('enter second number');
d = parseInt(d);
alert(substraction(c,d));
break;
case 3:
let e = prompt('enter first number');
e = parseInt(e);
let f = prompt('enter second number');
f = parseInt(f);
alert(multiplication(e,f));
break;
case 4:
let g = prompt('enter first number');
g = parseInt(g);
let h = prompt('enter second number');
h = parseInt(h);
alert(division(g,h));
break;
case 5:
let i = prompt('enter number');
i = parseInt(i);
let j = prompt('enter power');
j = parseInt(j);
alert(power(i,j));
break;
case 6:
exit();
break;
}

