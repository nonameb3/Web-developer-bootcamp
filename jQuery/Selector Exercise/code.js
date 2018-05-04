if (jQuery) {
	console.log("jQuery Loader.");
}
else {
	alert("Can't Load jQuery");
}

code ={}

code.aws = function (){
	//Select all divs and give them a purple background.
	$("div").css("background-color","purple");
	//Select the divs with class "highlight" and make them 200px wide.
	$(".highlight").css("width","200px");
	//Select the divs with id "third" and give it a orange border.
	$("#third").css("border","1px solid orange");
	//Bonus: Select the first div only and change its font color to pink.
	$("div:first").css("color","pink");
};
