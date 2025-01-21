// const input = document.getElementById("text-input");
// const button = document.getElementById("button");
// const text = document.getElementById("text");

// button.onclick= function (){
//     text.innerHTML = input.value;
// }

// let a = [1,2,3,4,5,6,7,8];

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);}
    
const input = document.getElementById("input");
const btn = document.getElementById("button");
const output = document.getElementById("h1");

btn.onclick = function(){
    if (input.value > 10) {
        output.innerHTML = "The value is greater than 10";
    } else if(input.value < 10) {
        output.innerHTML = "The value is less than 10";
    }else{
        output.innerHTML = "The value is equal to 10";
    }
}