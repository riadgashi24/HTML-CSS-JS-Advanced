// function printNames(){
//     document.write("John Doe");
//     document.write("<br>");
//     setTimeout(function(){document.write("Ana")},2000);
//     document.write("Bob");
// }

// printNames();

var colors = ["red","green","blue","purpule"];
var names = ["John","Ben", "Anna", "Mark"];

function changeColor(){
    document.querySelector("body").style.background = colors[Math.floor(Math.random()*colors.length)];
}
function chnageName(){
    document.querySelector("p").innerHTML = names[Math.floor(Math.random()*names.length)];
}

setInterval(changeColor, 1000);
setInterval(chnageName, 1000);