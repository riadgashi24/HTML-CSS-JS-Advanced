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

// var button1 = document.getElementById("btn1");
// var text1 = document.getElementById("txt1");

// button1.onclick = function () {
//     // text1.style.color = "red";s
//     // text1.style.background = "lightgrey";
//     // text1.style.padding = "20px";
//     // text1.style.fontSize = "100px";
//     // text1.style.textAlign = "center";
//     text1.setAttribute("class","test")
// }

// text1.onmouseover = function () {
//     text1.style.cssText = "color:red; background:lightblue; padding:20px; font-size: 100px; text-align:center;"
// }

var btn_circle = document.getElementById("circleBtn");
var btn_rect = document.getElementById("rectBtn");
var btn_triangle = document.getElementById("triangleBtn");

var circle = document.getElementById("circle");
var rect = document.getElementById("rect");
var triangle = document.getElementById("triangle");

btn_circle.onclick = function (){
    circle.setAttribute("class", "circle_shape");
}
btn_rect.onclick = function (){
    rect.setAttribute("class", "rect_shape");
}
btn_triangle.onclick = function (){
    triangle.setAttribute("class", "triangle_shape");
}

circle.onclick = function (){
    circle.setAttribute("class","hide");
}
rect.onclick = function (){
    rect.setAttribute("class","hide");
}
triangle.onclick = function (){
    triangle.setAttribute("class","hide");
}