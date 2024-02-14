let container = document.getElementById("container");
let display = document.getElementById("display");

document.addEventListener("keydown", function(e){
    display.style.color = "red";
    display.innerText = e.key + " is key Down";
});

document.addEventListener("keyup", function(e){
    display.style.color = "green";
    display.innerText = e.key + "is keyUp";
});
