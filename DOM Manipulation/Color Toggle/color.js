var border = document.querySelector(".Main")
var button = document.querySelector("button")
var button2 = document.querySelectorAll("button")[1]
var body=false

button.addEventListener("click", function() {
    if (border.getAttribute("style") != null) {
        if (border.getAttribute("style").indexOf("pink") == -1) {
            border.style.backgroundColor = "pink";
        } else {
            border.style.backgroundColor = "";

        }
    }
    else{
    	border.style.backgroundColor = "pink";
    }
});

button2.addEventListener("click",function(){
   //document.body.style.background = "pink";
   document.body.classList.toggle("test");
});