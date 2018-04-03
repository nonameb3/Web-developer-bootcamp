

//print all number 10 to 40
var num = 10;
console.log("Print all numbers between 10-40")
while(num <= 40){
	console.log(num);
	num ++;
}

//Print all even number between 10-40
var num = 10;
console.log("Print all even numbers between 10-40")
while(num <= 40){
	if( num%2 == 0){
		console.log(num);
	}
	num ++;
}

//Print all odd number between 300-333
var num = 300;
console.log("Print all odd numbers between 10-40")
while(num <= 333){
	if( num%2 !== 0){
		console.log(num);
	}
	num ++;
}

//Print all number divisible by both 5 and 3 between 5 and 50
var num = 5;
console.log("Print all number divisible by both 5 and 3 between 5 and 50")
while(num <= 50){
	if( num%3 == 0 && num%5 == 0){
		console.log(num);
	}
	num ++;
}
