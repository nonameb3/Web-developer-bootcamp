window.setTimeout(function() {

    // Start the Code.
    var todo = [];
    var input = prompt("What do you want to do?");


    function list() {
        console.log("***** List *****");
        todo.forEach(function(todo, y) {
            console.log(y + ": " + todo);
        });
        console.log("****************");
    }

    function newValue() {
        var new_todo = prompt("Plase tell us?");
        todo.push(new_todo);
        console.log("Add " + new_todo + " to List.");
    }


    function deleteValue() {
        var index = prompt("Which Index do you want to delete?")
        todo.splice(index, 1);
        console.log("Complete delete value in Index " + index)
    }


    while (input != "quit") {
        if (input == "list") {
            list();
        } else if (input == "new") {
            newValue();
        } else if (input == "del") {
            deleteValue();
        }
        input = prompt("What do you want to do?");
    }
    console.log("Now you quit the App.")

}, 500);