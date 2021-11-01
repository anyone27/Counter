// let btnDecrease = document.getElementById("decrease");
// let btnReset = document.getElementById("reset");
// let btnIncrease = document.getElementById("increase");
// let counter = document.getElementById("counter");

var count = 0;

// btnReset.addEventListener("click", resetCounter);
// btnDecrease.addEventListener("click", decreaseCounter);
// btnIncrease.addEventListener("click", increaseCounter);

function resetCounter() {
    count = 0;
    console.log(count);
    document.getElementById("value").innerHTML = count;
    counterColour();

}

function increaseCounter() {
    count++;
    console.log(count);
    document.getElementById("value").innerHTML = count;
    counterColour();

}

function decreaseCounter() {
    count--;
    console.log(count);
    document.getElementById("value").innerHTML = count;
    counterColour();
}


function counterColour() {
    if (count < 0) {
        document.getElementById("value").style.color = "red";
    }
    else if (count > 0) {
        document.getElementById("value").style.color = "green";
    }
    else {
        document.getElementById("value").style.color = "black";
    }
}
