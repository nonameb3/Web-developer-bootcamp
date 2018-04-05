var enter =prompt("Are we there yet?");

//while (enter !== "yes") {
// 	enter = prompt("Are we there yet?");
//}
//alert("Finally,We made it!!");

//better
while (enter.indexOf("yes") === -1 && enter.indexOf("yeah") === -1) {
 	enter = prompt("Are we there yet?");
}
alert("Finally,We made it!!");



//while(enter === "yes"){
//	alert("Finally,We made it!!");
//	enter = NaN; }
//