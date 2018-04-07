window.setTimeout(function() {

  // Start the Code.
var todo = [];
var input = prompt("What do you want to do?");

	while(input != "Quit"){
		if (input == "List"){
			console.log(todo);
		}
		else if(input == "New"){
			new_todo = prompt("Plase tell us?");
			todo.push(new_todo);
		}
		input = prompt("What do you want to do?");
	}
	console.log("Now you quit the App.")

}, 500);