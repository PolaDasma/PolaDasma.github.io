function green() {
    var green = document.getElementById("green");
    var red = document.getElementById("red");
    green.style.backgroundColor = "#00ff54";
    green.style.boxShadow = " 0px 0px 10px #00ff54";
    red.style.backgroundColor = "black";
    red.style.boxShadow = "none";
    setTimeout(yellow, 1000);
}

function red() {
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");
    red.style.backgroundColor = "red";
    red.style.boxShadow = " 0px 0px 10px red";
    yellow.style.backgroundColor = "black";
    yellow.style.boxShadow = "none";
    setTimeout(green, 1000);
}

function yellow() {
    var yellow = document.getElementById("yellow");
    var green = document.getElementById("green");
    yellow.style.backgroundColor = "yellow";
    yellow.style.boxShadow = " 0px 0px 10px yellow";
    green.style.backgroundColor = "black";
    green.style.boxShadow = "none";
    setTimeout(red, 1000);
}

function clicked() {
    green();
}