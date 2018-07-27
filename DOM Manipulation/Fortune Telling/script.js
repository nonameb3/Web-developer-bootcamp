console.log("Connect !!")

var Name = document.getElementById('fname');
var SurName = document.getElementById('lname');
var BirthDay = document.querySelector("select");
var Slide = document.querySelector(".Slide");
var Img = document.querySelector("img");
var Span = document.querySelector("span");


// Add Click Event
document.getElementById('btn').addEventListener('click', clicked)

//Check input
function clicked() {
    if(!(Name && Name.value)){
        alert("Please enter your FristName.")
    } else if(!(SurName && SurName.value)){
        alert("Please enter your Surname.")
    }else if(BirthDay.value == ""){
        alert("Please enter your BirthDay")
    }else{
        console.log("Full Name is : " + Name.value + " " + SurName.value + "\nBirth Day is : " + BirthDay.value)
        SlideContent()
    }
}

//Show Content
function SlideContent(){
    Span.textContent = Name.value + " " + SurName.value
    var path = "pic/"+BirthDay.value+".png";
    Img.setAttribute("src",path)
    Slide.setAttribute("style","display=''")
}
