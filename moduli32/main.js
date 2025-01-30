var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var button = document.getElementById("btn");
//var ans = document.querySelector("#ans");

button.addEventListener("click", function(){
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
})


var text = "The best school is Digital School";
var result = text.replace("Digital School","Another school");
//console.log(result);

// var text2 = "abcdef";
// var regex = new RegExp("abc");
// document.getElementById("ans").innerHTML = regex(text2);

var text1 = "Digital School is the 10 best school";
var regex = /[0,9]/g;
document.getElementById("ans").innerHTML = text1.match(regex);