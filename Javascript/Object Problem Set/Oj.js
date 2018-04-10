var movie = [{
        title: "Thor Ragnarok",
        rate: 5,
        watched: true
    },
    {
        title: "Star war IX",
        rate: 4.7,
        watched: false
    }
]


function textcal(movie) {
    var text = "You have";
    if (movie.watched == true) {
        text += " watched ";
    } else {
        text += " not seen ";

    }

    text += "\"" + movie.title + "\""
    text += " - " + movie.rate + " stars";
    return text
}


function mylist(i) {
    i.forEach(function(i) {
        console.log(textcal(i));
    })
}