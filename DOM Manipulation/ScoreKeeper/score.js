var pOne = document.querySelector(".p1button");
var pTwo = document.querySelector(".p2button");
var reset = document.querySelector(".re");
var setsc = document.querySelector("input");
var setscdps = document.querySelector("h3 span");
var h1 = document.querySelector("h1");
var p1dps = document.querySelector(".p1");
var p2dps = document.querySelector(".p2");
var p1sc = 0;
var p2sc = 0;
var winsc = 5;

setsc.addEventListener("change", function() {
    //var input = document.querySelector("input");
    console.log("Set Winner Score to : " + this.value);
    setscdps.textContent = this.value;
    winsc = Number(this.value)
    resetAll();
});


reset.addEventListener("click", resetAll);
pOne.addEventListener("click", function() {
    if ((p1sc != winsc) && (p2sc != winsc)) {
        p1sc = calScore(p1sc, p1dps)
    }
});
pTwo.addEventListener("click", function() {
    if ((p1sc != winsc) && (p2sc != winsc)) {
        p2sc = calScore(p2sc, p2dps)
    }
});


function resetAll() {
    p1sc = 0;
    p2sc = 0;
    p1dps.textContent = p1sc;
    p1dps.classList.remove("color");
    p2dps.textContent = p2sc;
    p2dps.classList.remove("color");
}

function calScore(x, y) {
    if (x < winsc) {
        x++;
        if (x == winsc) {
            y.classList.toggle("color");
        }
        y.textContent = x;
    }
    return x
}

// pOne.addEventListener("click", function() {
//     if ((p1sc != winsc) && (p2sc != winsc)) {
//         if (p1sc < winsc) {
//             p1sc++;
//             if (p1sc == winsc) {
//                 p1dps.classList.toggle("color");
//             }
//             p1dps.textContent = p1sc;
//         }
//     }
// });



// pTwo.addEventListener("click", function() {
//     if ((p1sc != winsc) && (p2sc != winsc)) {
//         if (p2sc < winsc) {
//             p2sc++;
//             if (p2sc == winsc) {
//                 p2dps.classList.toggle("color");
//             }
//             p2dps.textContent = p2sc;
//         }
//     }
// });
