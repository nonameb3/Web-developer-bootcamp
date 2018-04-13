var pOne = document.querySelector(".p1");
var pTwo = document.querySelector(".p2");
var reset = document.querySelector(".re");
var h1 = document.querySelector("h1");
var p1sc= 0;
var p2sc= 0;
var winsc = 5;

pOne.addEventListener("click",function(){
	if (p1sc < 5){
		p1sc ++ ;
		h1.textContent= p1sc + " to " +p2sc;
	}
});

pTwo.addEventListener("click",function(){
	if (p2sc < 5){
		p2sc ++ ;
		h1.textContent= p1sc + " to " +p2sc;
	}
});