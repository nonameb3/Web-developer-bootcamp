

//print all number 10 to 40
console.log("Print all numbers between -10-19")

for (var i = -10; i <= 19; i++) {
	console.log(i);
}


//Print all even number between 10-40
console.log("Print all even numbers between 10-40")

for(var i=10; i <=40 ;i++){
	if(i%2 === 0){
		console.log(i)
	}
}


//Print all odd number between 300-333
console.log("Print all odd numbers between 300-333")

for(i=300; i<=333 ; i++){
	if(i%2 !==0){
		console.log(i)
	}
}


//Print all number divisible by both 5 and 3 between 5 and 50
console.log("Print all number divisible by both 5 and 3 between 5 and 50")

for(i=5;i<=50;i++){
	if(i%3 ===0 && i%5===0){
		console.log(i)
	}
}