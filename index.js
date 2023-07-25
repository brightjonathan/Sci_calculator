
function clearScreen() {
    document.getElementById("result").value = ""
};

function display(value) {
    document.getElementById("result").value +=value
};

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q
};


function squaredisplay() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = p**2
}


function squarerootdisplay() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(p)
};


function cubedisplay() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = p**3
};


function cuberootdisplay() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = Math.cbrt(p)
}

function sin() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = Math.sin(p)   
}