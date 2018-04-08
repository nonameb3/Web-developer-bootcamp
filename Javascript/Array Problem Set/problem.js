function printReverse(num) {
    var count = num.length;
    var cal = [];
    for (i = 0; i < count; i++) {
        cal.push(num.pop());
        console.log(cal[cal.length - 1]);
    }
}

function isUniform(value) {
    for (i = 0; i < value.length - 1; i++) {
        if (value[i] != value[i + 1]) {
            return false
        }
    }
    return true
}

function sumArray(value){
	var sum = 0;
	for(i=0;i<value.length;i++){
		sum = sum+value[i];
	}
	return sum
}


function max(value){
	var store = 0;
	value.forEach(function(i) {
		if (i >= store) {
			store= i;
		}
	});
	return store
}	


