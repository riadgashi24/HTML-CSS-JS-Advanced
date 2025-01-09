// var button1 = document.querySelector("button");

// // button1.onclick = function (){
// //     alert("Hello");
// // }

// // button1.addEventListener("click", function (){
// //          alert("Hello World");
// //      })
// var button2 = document.getElementById("btn1");
// var button3 = document.getElementById("btn2");
// var button4 = document.getElementById("btn3");

// button2.onmouseover = function (){
//     alert("over");
// }
// button3.onmouseleave = function (){
//     alert("Leave");
// }
// button4.onmousewheel = function (){
//     alert("Wheel");
// }

var button1 = document.getElementById("btn1");
var text1 = document.getElementById("txt1");

button1.onclick = function () {
    text1.style.color = "red";
    text1.style.background = "lightgrey";
    text1.style.padding = "20px";
    text1.style.fontSize = "100px";
    text1.style.textAlign = "center";
}