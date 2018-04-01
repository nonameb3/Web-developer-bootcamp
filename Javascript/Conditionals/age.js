var age = Number(prompt("What is your age?"));


if(age < 0  ){
	console.log("Error")
	alert("Error")
}

else if(age == 21){
	console.log("Happy birthday")
	alert("Happy 21st birthday")
}

else if( age%2 != 0){
	console.log("your age is odd")
	alert("Your age is odd")
}

else{
	alert("On going")
}

