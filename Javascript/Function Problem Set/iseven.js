function isEven(i) {
	if(typeof i == "number" ){
		if (i%2 === 0 ) {
			return true;
		}
		else{
			return false;
		}
	}
	else{
		console.log("Not Number")
	}
}

function factorial(i){
	if(typeof i == "number"){
		var cal = 1;
			for (var i = i; i >= 1; i--) {
			cal *= i;
			}
		return cal;
	}
	else{
		console.log("Not Number")
	}

}

function kebabToSnake(str){
	if(isNaN(str)){
		var index = str.indexOf("-") ;
		var text = str.slice(0,index);
		var i = 0;
			while ( index != -1 ){
				nexttext = str.slice(text.length+1);			
				index = nexttext.indexOf("-");
				//console.log("nexttext is " +nexttext);
				//console.log("index is " +index);
					if (index == -1){
						return text = text + "_" + nexttext.slice(0);
					}
				word = nexttext.slice(0,index);
				//console.log("word is "+word);
				text = text + "_" + word;	
				//console.log(text)
			}
			return str
	}
}

function kebabToSnakefix(x) {
        return x.replace(/-/g, "_");
    }